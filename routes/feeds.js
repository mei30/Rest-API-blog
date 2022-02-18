const express = require("express");
const postsController = require('../controller/feed');

const router = express.Router();

route.get("/posts", postsController.getPosts);

module.exports = router;
