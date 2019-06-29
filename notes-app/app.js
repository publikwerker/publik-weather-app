const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('12.0.2');

//Create add command
yargs.command({
  command:'add',
  describe: 'Add a new note',
  handler: function(){
    console.log('adding a new note');
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('Removing a note');
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function(){
    console.log('Listing Notes');
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: function(){
    console.log('Reading notes');
  }
})

//add, remove, read, list
console.log(yargs.argv);
