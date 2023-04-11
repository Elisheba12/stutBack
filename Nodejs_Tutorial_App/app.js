const express = require('express');
const port = 3000;
const app = express();



app.get("/user/:name/:age/:sex", (req, res, next) => {
  res.status(200).json({
    "status": "success",
    "message": "key values entered from the URL",
    "user": req.params
  });

});



//Setting up server

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});


module.exports = app;
