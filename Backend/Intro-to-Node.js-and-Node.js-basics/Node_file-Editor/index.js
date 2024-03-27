const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case "read":
    readFile(file);
    break;
  case "append":
    appendFile(file, content);
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

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    console.log(content);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

function appendFile(filePath, content) {
  try {
    fs.appendFileSync(filePath,  "\n"+ content);
    console.log(`Content appended to the file '${filePath}'`);
  } catch (err) {
    console.error("Error appending to file:", err.message);
  }
}

function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`File '${filePath}' deleted`);
  } catch (err) {
    console.error("Error deleting file:", err.message);
  }
}

function createFile(filePath) {
  try {
    fs.writeFileSync(filePath, "");
    console.log(`File '${filePath}' created`);
  } catch (err) {
    console.error("Error creating file:", err.message);
  }
}

function renameFile(oldFilePath, newFileName) {
  const newFilePath = path.join(path.dirname(oldFilePath), newFileName);
  try {
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`File '${oldFilePath}' renamed to '${newFileName}'`);
  } catch (err) {
    console.error("Error renaming file:", err.message);
  }
}

function listFiles(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    console.log("Files in directory:");
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    console.error("Error listing files:", err.message);
  }
}





// const fs = require("fs");
// const path = require("path");

// const operation = process.argv[2];
// const file = process.argv[3];
// const content = process.argv[4];

// switch (operation) {
//   // complete the fillowing function.
    
//   default:
//     console.log(`Invalid operation '${operation}'`);
// }
