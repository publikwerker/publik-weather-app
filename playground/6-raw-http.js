const https = require('https');

const url =`https://api.darksky.net/forecast/479e3e61b28a471af898ef5eccc876f2/44.5,-122`;

const request = https.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();

  })

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  })
})
request.on('error', (error) => {
  console.log('An error', error)
})
request.end();