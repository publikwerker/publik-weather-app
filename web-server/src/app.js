const path = require('path');
const chalk = require('chalk');
const express = require('express');
const hbs = require('hbs');

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


app.get('', (req, res) => {
  res.render('index', {
    title: "Weather App",
    name: "Jason Hoffman",
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Jason Hoffman'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Jason Hoffman',
    message: 'We are here to help.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location:'Portland',
    forecast:'Sunny through the day.'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.blue.inverse(`Server is running in port ${PORT}.`));
})