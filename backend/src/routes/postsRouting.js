const { BASE_API, BASE_POSTS, BASE_UPLOAD } = process.env;
const express = require("express");
const router = express.Router();
const fs = require('fs')
const path = require('path')
const jwt = require("jsonwebtoken");
const Posts = require("../database/table/posts");
const multer = require("../middleware/multer-config");

const baseUrl = `${BASE_API}${BASE_POSTS}`;
router.post(`${baseUrl}`, multer.single('posts_file'), async (req, res) => {
  const filePath = path.join(__dirname, `../../assets/img/${req.file.filename}`)

  if (fs.existsSync(filePath)) {
    const postsTable = new Posts()
    postsTable.set({
      ...req.body,
      posts_file: req.file.filename
    })

    const result = await postsTable.create()
    console.log('result', result)
    res.json(result)
  } else {
    res.json(false)
  }

});

router.get(`${baseUrl}/public/image/:img`,  async (req, res) => {
  console.log('coucou')
  res.sendFile(path.join(__dirname, `../../assets/img/${req.params.img}`))
})

module.exports = router;
