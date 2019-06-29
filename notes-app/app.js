const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('12.0.2');

//add, remove, read, list
//Create add command
yargs.command({
  command:'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNotes(argv.title, argv.body);
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('Removing a note');
    notes.removeNote(argv.title);
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

yargs.parse();