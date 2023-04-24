const express = require('express');
const apiRouter = require('./src/routes/apiRouter')
require('dotenv').config();
const app = express();


app.use('/', apiRouter)



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your server is live and listening on port: ${port}`);
});