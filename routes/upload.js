const express = require("express");
const router = express.Router();
const {  uploadFile } = require("../controllers/upload");
const { checkUserIsAuthenticated } = require("../middlewares/authentication");
const { upload } = require("../middlewares/upload");

router
  .route("/")
  .post(/*[checkUserIsAuthenticated], */upload.single("file"), uploadFile);

module.exports = router;
