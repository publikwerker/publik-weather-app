const request = require('request');
const geoToken = process.env.GEOTOKEN;
const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${geoToken}&?limit=1`;

  request({url, json:true}, (err, {body}) => {
    if (err) {
      return callback(`Unable to contact GEOCODING services`);
    } else if (body.features.length === 0) {
      return callback(`Unable to find location. Try another search`);
    } else {
      return callback(undefined, {
        place: body.features[0].place_name,
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
      })
    }
  })
}
module.exports = geoCode;