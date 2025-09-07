const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const { createPostController } = require("../controllers/post.controller");



const upload = multer({storage: multer.memoryStorage()});

//POST - /api/posts (Protected Route) (image-file come here -> use multer)
router.post("/",
    authMiddleware,  //req.user = user data set karega
    upload.single('image'), //req.file = image file set karega
    createPostController
  );

module.exports = router;
