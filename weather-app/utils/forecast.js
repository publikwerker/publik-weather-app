const request = require('request');
const chalk = require('chalk');

const forecast = (data, callback) => {
  const {lat,long,place} = data;
  const URL =`https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/${lat},${long}`;

  request({url: URL, json: true}, (err, res) => {
    if (err){
      callback(chalk.red.inverse.bold(`Unable to access network connection`));
    } else if (res.body.error) {
      callback(chalk.red.inverse.bold(`Unable to find location`));
    } else {
      const temp = res.body.currently.temperature;
      const precip = res.body.currently.precipProbability;
      const text = res.body.daily.data[0].summary;
      callback(undefined, chalk.yellow(`The temperature in ${place}, is ${temp} degrees Fahrenheit, with ${precip}% chance of rain. The forecast calls for ${text.toLowerCase()}`)
      );
    };
  });
};

module.exports = forecast;