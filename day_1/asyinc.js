import fs from "node:fs";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function myMpp(arr, cb) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = cb(arr[i]);
//     newArr.push(result);
//   }
//   return newArr;
// }

// console.log(myMpp(arr, (x) => x * 2));

// let count;
// setTimeout(()=>{count=1
//     console.log(count);

// },1)
// console.log(count);

// fs.readFile('a.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);

// })

///1
// function getUserName (cb){
//     setTimeout(( )=> {
//         const userName='moshe'
//         cb(userName)
//     },1000)
//  }

// function cb(userName){
//     console.log( "User name is: " + userName );
//  }

// getUserName(cb)
// getUserName((userName)=>console.log("User name is: " + userName))

//2
// function loadScore(cb){
//     setTimeout(()=>{
//         const score = 85
//         cb(score)
//     },1500)
//  }

// loadScore((score)=>console.log("Loaded score: "+ score )
// )

///3
//

///4
// function  getProductPrice(productId, cb){
//     setTimeout(()=>{
//         const price = 99.9
//         cb(price)
//     },1200)
//  }

// getProductPrice(123,(price)=>{
//     console.log( "Price for product 123 is: "+ price)
// })

///4
// function loadConfig(cb) {
//   setTimeout(() => {
//     const obj = { env: "dev", debug: true };
//     cb(obj);
//   }, 500);
// }

// loadConfig((obj) => {
//   console.log("Config loaded: " + obj.debug)
// });
///5
// function  addAsync(a, b, cb){

//     setTimeout(()=>{
//         const sum=a+b
//         cb(sum)
//     },1000)
//  }

// addAsync(3,4,(sum)=>{
//     console.log("Sum is: "+ sum);

// })

///7
// function  getFirstAsync(array, cb) {
//     setTimeout(()=>{
//         cb(array[0])
//     },700)
//  }

// getFirstAsync([3,4,5,6,7],(first)=>{
//     console.log(first);

// })
///8
// function  isEvenAsync(number, cb){
//     setTimeout(()=>{
//         if(number%2==0){
//             cb(true)
//          }
//          else{
//             cb(false)
//          }
//     },800)
//  }

// isEvenAsync(3,(bool)=>{console.log(bool);

// })

///9
// function  downloadFile(url, cb){
//     setTimeout(()=>{
//         console.log("Downloading from:"+ url);
//         cb("Download finished")
//     },1500)
//  }

// downloadFile('a.txt',()=>{})

///10
// function doubleAsync(value, cb){
//     setTimeout(()=>{
//         cb(value*2)
//     },300)
//  }

// doubleAsync(10,(valus)=>{
//     console.log("Result:" + valus)
// })
/////////////////////////////////////////2/////////////////////////////
///11
// const data = "Hello from async writeFile";
// fs.writeFile("note.txt", data, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully");

//   }
// });
///12
// fs.readFile("note.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File contents:", data);
//   }
// });
///13
// fs.appendFile("note.txt", "\nNew line added", (err, data) => {
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("Line appended");

//   }
// });
///14
// fs.mkdir("logs", (err, data) => {
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("Directory 'logs' created");

//   }
// });
///15
// fs.writeFile("logs/log.txt", "First log line", (err, data) => {
//   if (err) {
//     console.log("Error creating log file");
//   }else{
//     console.log("Log file created");

//   }
// });
// ///16
// fs.readdir("logs", (err, data) => {
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("Files in logs:",data);

//   }
// });
///17
// fs.stat("note.txt", (err, data) => {
//   if (err) {
//     console.log("Error getting stats");
//   } else {
//     console.log("Is file: " + data.isFile() , "Size: " + data.size);
//   }
// });
///18
// fs.unlink("logs/log.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else console.log("log.txt deleted");
// });
///19
// fs.writeFile("note.txt", "New content here", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("note.txt overwritten");
//     fs.readFile("note.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else console.log(data);
//     });
//   }
// });
///20
// fs.mkdir("data", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("data/info.txt", "Some info", (err, data) => {
//       if (err) {
//         console.log(err);
//       }else(
//         console.log(data)
        
//       )
//     });
//   }
// });
