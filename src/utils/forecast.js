const request = require('request');
const darkKey = process.env.DARKSKYKEY;

const forecast = (data, callback) => {
  const {lat,long,place} = data;
  const url =`https://api.darksky.net/forecast/${darkKey}/${lat},${long}`;

  request({url, json: true}, (err, {body}) => {
    if (err){
      callback(`Unable to access network connection`);
    } else if (body.error) {
      callback(`Unable to find location`);
    } else {
      const {temperature} = body.currently;
      const precip = body.currently.precipProbability;
      const {summary} = body.daily;
      const highTemp = body.daily.data[0].temperatureMax;
      callback(undefined, {
        temperature,
        precip,
        summary,
        place,
        highTemp
      });
    };
  });
};

module.exports = forecast;