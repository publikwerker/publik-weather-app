const request = require('request');
const chalk = require('chalk');

const forecast = (data, callback) => {
  const {lat,long,place} = data;
  const url =`https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/${lat},${long}`;

  request({url, json: true}, (err, {body}) => {
    if (err){
      callback(`Unable to access network connection`);
    } else if (body.error) {
      callback(`Unable to find location`);
    } else {
      const {temperature} = body.currently;
      const precip = body.currently.precipProbability;
      const {summary} = body.daily.data[0];
      callback(undefined, {
        temperature,
        precip,
        summary,
        place
      });
    };
  });
};

module.exports = forecast;