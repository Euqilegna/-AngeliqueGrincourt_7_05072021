const Model = require("./model");
const Comments = require("./comments");
const mysql = require("../mysql");
const { BASE_API, BASE_POSTS, BASE_UPLOAD } = process.env;

const tableName = "posts";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_author`,
  `${tableName}_title`,
  `${tableName}_file`,
  `${tableName}_dateOfPublish`
];

class Posts extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);

    this.getAll = async () => {
      const comments = new Comments()
      const commentsList = await comments.getAll()

      const sql = `SELECT * FROM ${this.tableName} INNER JOIN users ON posts_author = users_id`;
      const [...rows] = await mysql.execute(sql);

      const baseUrl = `${BASE_POSTS}`;
      rows.forEach(e => {
        e.comments = commentsList.filter(c => c.comments_post === e.posts_id )
        e.posts_file = `${baseUrl}/public/image/${e.posts_file}`
      })
      return rows
    };
  }

}

module.exports = Posts;
