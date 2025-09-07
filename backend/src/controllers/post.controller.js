const postModel = require("../models/post.model");
const {generateCaption} = require("../service/ai.service");


async function createPostController(req, res) {

  const file = req.file; // multer se aaya hua image file
  console.log("file received:", file);

  const base64Image = new Buffer.from(file.buffer).toString('base64'); //here the image data come in buffer we convert it to base64 string

  const caption = await generateCaption(base64Image);
  
  console.log("Generated Caption:", caption);
  
  
}

module.exports = { createPostController };