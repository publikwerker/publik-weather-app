const chalk = require('chalk');
const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Hello express!');
});

app.get('/help', (req, res) => {
  res.send('Help page');
});

app.get('/about', (req, res) => {
  res.send(`About page`);
});

app.get('/weather', (req, res) => {
  res.send(`Weather page`);
});

//app.com
//app.com/help
//app.com/about

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.blue.inverse(`Server is running in port ${PORT}.`));
})