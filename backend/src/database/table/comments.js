const Model = require("./model");

const tableName = "comments";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_author`,
  `${tableName}_content`,
];

class Comments extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);
  }
}

module.exports = Comments;
