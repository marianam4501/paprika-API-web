exports.uploadFile = (req, res) => {
  // #swagger.tags = ['Upload']
  // #swagger.summary = 'Upload images (amazon web services)'
  const file = req.file;
  res.send({
    message: "Uploaded!",
    url: file.location,
    name: file.key,
    type: file.mimetype,
    size: file.size,
  });
};
