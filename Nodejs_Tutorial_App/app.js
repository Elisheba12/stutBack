const express = require('express');
const app = express();

app.get("/", (req, res, next) => {
  res.send(`Hello World!`);
})

//Setting up server
const port = 3000;
app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});


module.exports = app;
