const axios = require('axios');
require('dotenv').config();

const homeController = (req, res) => {
  res.json('Hello World!');
}

const apiController = (req, res) => {
  const apiKey = process.env.API_KEY;
  axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  }).then(response => {
    res.status(200).json(response.data)
  }).catch(error => {
    console.log(error.message)
  })
}

module.exports = {
  apiController,
  homeController
}
