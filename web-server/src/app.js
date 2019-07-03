const chalk = require('chalk');
const express = require('express');
const app = express();

app.get('', (req, res)=>{
  res.send('Hello express!')
});

//app.com
//app.com/help
//app.com/about

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.blue.inverse(`Server is running in port ${PORT}.`));
})