import fs from "node:fs";
function readFile(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
        statFile(path)
       
    }
  });
}

function statFile(path) {
  fs.stat(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('size: ',data.size,'data: ',data.birthtime);
    }
  });
}
readFile('daniel.txt')

// function lstatFile(path){
//     fs.lstat(path, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.isFile());
//     }
//   });
//  } 
// lstatFile('daniel.txt')