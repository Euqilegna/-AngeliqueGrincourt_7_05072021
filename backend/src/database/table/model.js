const mysql = require("../mysql");

class Model {
  constructor(tableName, primaryKey, foreignKey, fields) {
    this.tableName = tableName;
    this.foreignKey = foreignKey;
    this.primaryKey = primaryKey;
    this.fields = fields;
  }

  getAll = async () => {
    const sql = `SELECT * FROM ${this.tableName}`;
    const [...rows] = await mysql.execute(sql);
    return rows;
  };

  getById = async (id) => {
    const sql = `SELECT * FROM ${this.tableName} WHERE ${this.tableName}_id = ${id} `;
    const [...rows] = await mysql.execute(sql);
    return rows;
  };

  loadByField = () => {};

  create = () => {
    //`INSERT INTO ${this.tableName} () 
  };

  modify = () => {
    //`UPDATE ${this.tableName} SET` 
  };

  delete = async (id) => {
    const sql = `DELETE FROM ${this.tableName} WHERE ${this.tableName}_id = ${id}`
    const [...rows] = await mysql.execute(sql);
    return rows;
  };
}

module.exports = Model;
