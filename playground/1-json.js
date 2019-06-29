const fs = require('fs');
// const book = {
//   title: 'Elements of Style',
//   author: 'Strunk & White'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)


const fileInfo = JSON.parse(fs.readFileSync('1-json.json').toString());
console.log(fileInfo);
fileInfo.name="Jason";
fileInfo.age="45";
fs.writeFileSync('1-json.json', JSON.stringify(fileInfo));