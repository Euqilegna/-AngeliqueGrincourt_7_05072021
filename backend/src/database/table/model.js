const mysql = require("../mysql");

class Model {
  constructor(tableName, primaryKey, foreignKey, fields) {
    this.tableName = tableName;
    this.foreignKey = foreignKey;
    this.primaryKey = primaryKey;
    this.fields = fields;
    this.data = {};

    this.getAll = async () => {
      const sql = `SELECT * FROM ${this.tableName}`;
      const [...rows] = await mysql.execute(sql);
      return rows;
    };

    this.create = async () => {
      delete this.data[this.primaryKey];

      const keys = Object.keys(this.data);
      const values = Object.values(this.data);

      const valuesLength = "?,".repeat(keys.length).slice(0, -1); // Exemple 3 champs : ?,?,?, => slice => ?,?,?
      const sql = `INSERT INTO ${this.tableName} (${keys.join(
        ","
      )}) VALUES (${valuesLength})`;
      const { insertId } = await mysql.execute(sql, values);
      return await this.getById(insertId);
    };
  }

  // ?
  set = (data) => {
    if (!data) return;
    for (let [key, value] of Object.entries(data)) {
      if (this.fields.includes(key)) this.data[key] = value;
    }
  };


  getById = async (id) => {
    const sql = `SELECT * FROM ${this.tableName} WHERE ${this.primaryKey} = ?`; // "?" au lieu de passer l'id pour eviter les injections sql
    const [...rows] = await mysql.execute(sql, [id]);
    return rows;
  };

  // fields : key (champ de la table) => valeur à filtrer
  // Exemple :
  //    MATABLE (champ1, champ2)
  //    fields = { champ1: 'ma valeur', champ2: 'à rechercher'}
  getByField = async (fields) => {
    let sql = `SELECT * FROM ${this.tableName} WHERE 1=1 `;
    const values = [];
    //destructuration 
    for (let [key, value] of Object.entries(fields)) {
      sql += `AND ${key} = ? `;
      values.push(value);
    }

    console.log("sql", sql, values);
    const [...rows] = await mysql.execute(sql, values);
    return rows;
  };

  modify = async (dataToUpdate) => {
    const id = dataToUpdate[this.primaryKey];
    this.set(dataToUpdate);
    delete this.data[this.primaryKey];

    const values = []
    let updateStr = ''
    for (let [key, value] of Object.entries(this.data)) {
      updateStr += `${key} = ?,`;
      values.push(value);
    }

    const sql = `UPDATE ${this.tableName} SET ${updateStr.slice(0, -1)} WHERE ${this.primaryKey} = ?`;
    await mysql.execute(sql, [...values, id]);
    return await this.getById(id);
  };

  delete = async (id) => {
    const sql = `DELETE FROM ${this.tableName} WHERE ${this.primaryKey} = ?`;
    const result = await mysql.execute(sql, [id]);
    return result.affectedRows
  };

  // TODO A REGARDER ET A ADAPTER
  generateCondition(field, value, or, sqlParams) {
    const firstChar = value.toString().slice(0, 1);
    const conditionValue = ["%", "!", "$"].includes(firstChar)
      ? value.toString().slice(1)
      : value.toString();
    const operator = or ? "OR" : "AND";
    let where = "";
    switch (firstChar) {
      case "$": // Date
        const betweenValues = conditionValue.split(",");
        where += `${operator} ${field} BETWEEN ? AND ?`;
        sqlParams.push(
          `${betweenValues[0]} 00:00:00`,
          `${betweenValues[1]} 23:59:59`
        );
        break;
      case "%": // Like
        where += `${operator} ${field} LIKE `;
        sqlParams.push(`%${conditionValue}%`);
        break;
      case "!": // Not
        where += `${operator} ${field} ${"NULL" === value ? `IS NOT NULL` : `<> ?`
          } `;
        sqlParams.push(conditionValue);
        break;
      default:
        // Equals
        where += `${operator} ${field} ${"NULL" === value ? `IS NULL` : ` = ?`
          } `;
        sqlParams.push(conditionValue);
        break;
    }

    return where;
  }
}

module.exports = Model;
