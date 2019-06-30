const request = require('request');
const chalk = require('chalk');

const URL ='https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/37.8267,-122.4233';

request({url: URL, json: true}, (err, res)=>{
  console.log(chalk.blue(`The Temperature in Los Angeles is currently ${res.body.currently.temperature} degrees Fahrenheit.  There is ${res.body.currently.precipProbability}% chance of rain. It is predicted to be ${res.body.daily.data[0].summary.toLowerCase()}`));
})