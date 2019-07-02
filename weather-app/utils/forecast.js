const request = require('request');

const forecast = (long, lat, place, callback) => {
  const URL =`https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/${lat},${long}`;

  request({url: URL, json: true}, (err, res) => {
    if (err){
      callback(`Unable to contact access network connection`);
    } else if (res.body.error) {
      callback(`Unable to find location`);
    } else {
      const temp = res.body.currently.temperature;
      const precip = res.body.currently.precipProbability;
      const text = res.body.daily.data[0].summary;
      callback(undefined, `The temperature in ${place}, is ${temp} degrees Fahrenheit, with ${precip}% chance of rain. The forecast calls for ${text.toLowerCase()}`
      );
    };
  });
};

module.exports = forecast;