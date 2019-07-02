const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
geoCode('Portland', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
    forecast(data.long, data.lat, data.place, (error, data) => {
      console.log('Error', error)
      console.log('Data', data)
    })
})
