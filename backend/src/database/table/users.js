const Model = require("./model");

const tableName = "users";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_lastName`,
  `${tableName}_firstName`,
  `${tableName}_mail`,
  `${tableName}_pwd`,
  `${tableName}_birthday`,
  `${tableName}_profilePicture`,
  `${tableName}_isEnable`,
];

class Users extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);
  }
}

module.exports = Users;
