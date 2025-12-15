import fs from "node:fs";
import path from "node:path";
function readFile(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);

      fs.stat(path, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("size: ", data.size, "data: ", data.birthtime);
        }
      });
    }
  });
}

function listFilesOnly(dirPath) {
  fs.readdir(dirPath, (err, items) => {
    if (err) {
      console.log("Error reading directory:", err);
      return;
    }
    console.log(items);

    items.forEach((item) => {
      const fullPath = path.join(dirPath, item);

      fs.lstat(fullPath, (err, stats) => {
        if (err) {
          console.log("Error getting stats for", item, err);
          return;
        }

        if (stats.isFile()) {
          console.log("File:", item);
        }
      });
    });
  });
}

function printCountdown(n) {
  if (n <= 0) {
    console.log("Time's up!");
  } else {
    console.log(n);
    setTimeout(() => printCountdown(n - 1), 1000);
  }
}

function readerFile(Path) {
  fs.readFile(Path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }else{
      const dataSplit=data.split("\n")
      dataSplit.filter(line => line.trim() !== "")
      console.log(dataSplit);
      
      
    }
  });
}



function fetchUser(userID,callback){
    setTimeout(()=>{
        const user={id:userID,name:'daniel',email: "ddny2263@come.gmail"}
        callback(user)
    })
 } 

 fetchUser(1,(user)=>{
    console.log('User featcher',user);
    
 })