const fs = require('fs');

//fs.writeFileSync('notes.txt', 'Walter Cosmopolis is World Famous');

fs.appendFileSync('notes.txt', 'Walter Cosmopolis is World Famous for a reason!');