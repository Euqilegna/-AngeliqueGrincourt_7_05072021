const Model = require("./model");

const tableName = "posts";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_author`,
  `${tableName}_title`,
  `${tableName}_content`,
  `${tableName}_file`,
  `${tableName}_dateOfPublish`,
  `${tableName}_likes`,
  `${tableName}_unlikes`,
  `${tableName}_numberOfComments`,
];

class Posts extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);
  }
}

module.exports = Posts;
