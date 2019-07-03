const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const chalk = require('chalk');
const location = process.argv[2];

geoCode(location, (error, data) => {
  if (!location){
    return console.log(chalk.blue.bold.inverse(`Please provide city as command line argument`));
  } else if (error){
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
