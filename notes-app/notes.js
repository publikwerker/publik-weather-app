const fs = require('fs');
const chalk = require('chalk');

function getNotes(){
  return ("Your notes...");
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0){
    console.log('new note added');
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log('note title taken!');
  }
}

const removeNote = function (title){
  let noteArray = loadNotes();
  const newArray = noteArray.filter((note)=>{
    return note.title !== title;
  });
  if (noteArray.length === newArray.length){
    console.log(chalk.red.inverse.bold(`No note found!`));
  } else {
    console.log(chalk.green.inverse.bold(`Note titled ${title} removed!`));
  }
  saveNotes(newArray);
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNote,
  removeNote: removeNote
}