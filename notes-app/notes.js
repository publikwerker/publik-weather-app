const fs = require('fs');
const chalk = require('chalk');

function getNotes(){
  return ("Your notes...");
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note)=>note.title === title);

  if (!duplicateNote){
    console.log(chalk.green.bold.inverse('new note added'));
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log(chalk.red.bold.inverse('note title taken!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note)=>console.log(chalk.blue(`Title: ${note.title}, Body: ${note.body}`)));
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  };
};

const readNote = (title) => {
  const notes = loadNotes();
  const theNote = notes.find((note)=>note.title === title);
  if (theNote){
    console.log('Title: ' + chalk.blue(theNote.title) + `. Body: ${theNote.body}.`);
  } else {
    console.log(chalk.red.inverse.bold(`Title: ${title} not found!`));
  };
};

const removeNote = (title) => {
  let noteArray = loadNotes();
  const newArray = noteArray.filter((note)=>note.title !== title);
  if (noteArray.length === newArray.length){
    console.log(chalk.red.inverse.bold(`No note found!`));
  } else {
    console.log(chalk.green.inverse.bold(`Note titled ${title} removed!`));
  }
  saveNotes(newArray);
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}