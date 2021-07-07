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

  getById = () => {};

  loadByField = () => {};

  create = () => {};

  modify = () => {};

  delete = () => {};
}

module.exports = Model;
