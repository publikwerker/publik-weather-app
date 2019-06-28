const chalk = require('chalk');
const getNotes = require('./notes.js');
const notes = getNotes();
console.log(notes);
console.log(chalk.green('Success!!'));
console.log('Yay for' + chalk.keyword('orange')(' orange')+ ' colored text!');
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));
