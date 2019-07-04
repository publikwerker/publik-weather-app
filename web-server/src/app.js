const path = require('path');
const chalk = require('chalk');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const publicDirPath = path.join(__dirname, '../public')
const app = express();

//sets
app.set('view engine', 'hbs');
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
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
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