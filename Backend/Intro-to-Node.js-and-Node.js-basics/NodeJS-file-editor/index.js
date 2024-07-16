/*
 - reading ( read )
 - deleting ( delete )
 - creating ( create )
 - appending ( append )
 - rename ( rename )
 - list ( list )

*/

const path = require("path");
const fs = require("fs");
const [,,operation,file,...content] = process.argv;
const newContent = content.join(" ");
console.log(operation, file, newContent);

switch (operation) {
  // complete the fillowing function.
  case "read":
    readFile(file);
    break;
  case "append":
    appendFile(file, newContent);
    break;
  case "delete":
    deleteFile(file);
    break;
  case "create":
    createFile(file);
    break;
  case "rename":
    const newFileName = process.argv[4];
    renameFile(file, newFileName);
    break;
  case "list":
    listFiles(file);
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}


function readFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
}

// now the conntent is an array
function appendFile(file, content) {
  fs.appendFile(file, `\n${content}`, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Content appended to '${file}'`);
  });
}

function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`File '${file}' deleted`);
  });
}

function createFile(file) {
  fs.writeFile(file, "", (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`File '${file}' created`);
  });
}

function renameFile(file, newFileName) {
  const newFilePath = path.join(path.dirname(file), newFileName);
  fs.rename(file, newFilePath, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`File '${file}' renamed to '${newFileName}'`);
  });
}

function listFiles(file) {
  fs.readdir(file, (err, files) => {
    if (err) {
      console.error(err);
    }
    console.log(files);
  });
}
