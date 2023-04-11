const express = require('express');
const app = express();


app.get("/user/:name/:age/:sex", (req, res, next) => {
  res.json({ "user": req.params });
});


//Setting up server
const port = 3000;
app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});


module.exports = app;
