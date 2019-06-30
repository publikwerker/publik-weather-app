const request = require('request');
const chalk = require('chalk');

const URL ='https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/37.8267,-122.4233';

request({url: URL, json: true}, (err, res)=>{
  console.log(chalk.blue(`The Temperature in Los Angeles is currently ${res.body.currently.temperature} degrees Fahrenheit.  There is ${res.body.currently.precipProbability}% chance of rain. It is predicted to be ${res.body.daily.data[0].summary.toLowerCase()}`));
})

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHVibGlrd2Vya2VyIiwiYSI6ImNqeGplMnd2bjB6bWozenFua3JxMXNvcnAifQ.jvtutPYzNjoYyzdK9VQnVA';

request({url: geoURL, json: true}, (err, res) => {
  console.log(chalk.yellow(`The latitude and longitude of Los Angeles is ${res.body.features[0].center}`))
});