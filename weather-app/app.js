const request = require('request');
const chalk = require('chalk');

// const URL ='https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/37.8267,-122.4233';

// request({url: URL, json: true}, (err, res)=>{
//   if (err){
//     console.log(`Unable to access network connection`)
//   } else if (res.body.error) {
//     console.log(`Unable to find location`);
//   } else {
//     console.log(chalk.blue(`The Temperature in Los Angeles is currently ${res.body.currently.temperature} degrees Fahrenheit.  There is ${res.body.currently.precipProbability}% chance of rain. It is predicted to be ${res.body.daily.data[0].summary.toLowerCase()}`));
//   }
// })

// const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?access_token=pk.eyJ1IjoicHVibGlrd2Vya2VyIiwiYSI6ImNqeGplMnd2bjB6bWozenFua3JxMXNvcnAifQ.jvtutPYzNjoYyzdK9VQnVA&?limit=1';

// request({url: geoURL, json: true}, (err, res) => {
//   if (err) {
//     console.log(chalk.red.inverse.bold(`Unable to contact GEOCODING services`))
//   } else if (!res.body.features){
//     console.log(chalk.red.inverse.bold(`Unable to find location`));
//   } else {
//     const lat = res.body.features[0].center[1];
//     const long = res.body.features[0].center[0]
//     console.log(chalk.yellow(`The latitude and longitude of Los Angeles is ${lat}, ${long}`));
//   }
// });

const geoCode = (address, callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicHVibGlrd2Vya2VyIiwiYSI6ImNqeGplMnd2bjB6bWozenFua3JxMXNvcnAifQ.jvtutPYzNjoYyzdK9VQnVA&?limit=1`

  request({url: URL, json:true}, (err, res) => {
    if (err) {
      callback(`Unable to contact GEOCODING services`);
    } else if (res.body.features.length === 0) {
      callback(`Unable to find location. Try another search`);
    } else {
      console.log(res.body.features[0])
      const place = res.body.features[0].text;
      const lat = res.body.features[0].center[1];
      const long = res.body.features[0].center[0]
      console.log(chalk.yellow(`The latitude and longitude of ${place} is ${lat}, ${long}`));
    }
  })
}

geoCode('12Portland', (error, data) => { 
  console.log('Error', error);
  console.log('Data', data);
})