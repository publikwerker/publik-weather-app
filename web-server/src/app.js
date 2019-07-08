const path = require('path');
const chalk = require('chalk');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const app = express();

//sets handlebars engine and views config
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// static directory to index.html
app.use(express.static(publicDirPath));

// home page
app.get('', (req, res) => {
  res.render('index', {
    title: "Weather App",
    name: 'Publikwerker'
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Publikwerker'
  });
});

// help page
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'We are here to help.',
    name: 'Publikwerker'
  });
});

// weather page
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: `An address must be provided.`
    })
  };
  geoCode(req.query.address, (error, data) => {
    if (!req.query.address){
      return console.log(chalk.blue.bold.inverse(`Please provide city.`));
    } else if (error){
      return console.log(chalk.red.inverse.bold('Error'), error);
    }
    forecast(data, (error, forecastData) => {
      if (error) {
        return console.log(chalk.red.inverse.bold('Error'), error);
      }
      res.send(forecastData);
    })
  })
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term.'
    });
  };
  console.log(req.query.wet)
    res.send({
        products: []
  });
});

// help 404 page
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help',
    error: 'Help article not found',
    name: 'Publikwerker'
  });
});

// 404 page
app.get('*', (req, res) => {
  res.render('404', {
    title: 'My 404 page',
    error: 'Page not found!',
    name: 'Publikwerker'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.blue.inverse(`Server is running on port ${PORT}.`));
})