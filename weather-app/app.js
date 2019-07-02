const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const chalk = require('chalk');

geoCode('Portland', (error, data) => {
  if (error){
    return console.log(chalk.red.inverse.bold('Error'), error);
  }
    forecast(data, (error, forecastData) => {
      if (error) {
        return console.log(chalk.red.inverse.bold('Error'), error);
      } else {
        return console.log('Data', forecastData)
      }
    })
})
