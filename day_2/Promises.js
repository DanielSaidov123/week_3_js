import { rejects } from "assert";
import { resolve } from "path";
/////////////////////0//////////////////////////////
// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { id: userId, name: "John Doe", email: "john@example.com" };
//       resolve(user); // Success!
//     }, 1000);
//   });
// }

// // Using the promise+
// fetchUser(1)
//   .then((user) => {
//     console.log("User fetched:", user);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
/////////////////1//////////////////////////

// function getHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 500);
//   });
// }

// getHello()
// .then((text)=>{
//     console.log(text);
// }).catch((err)=>{
//     console.log(err);

// })

//////////////////2///////////////////////////

// function addAsync(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     },1000);
//   });
// }

// addAsync(4,5)
//   .then((sum) => {
//     console.log(sum);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////////////////////3/////////////////////////

// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (n % 2 == 0) {
//         resolve("Even");
//       } else {
//         reject("Odd number not allowed");
//       }
//     },800);
//   });
// }

// checkNumber(9)
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////////////////////4/////////////////////////////

// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve("Login successful");
//       } else reject("Invalid credentials");
//     },1200);
//   });
// }

// login("admin", "1234")
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////////////////////5////////////////////////////////

// function getNumbers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arr = [1, 2, 3, 4, 5];
//       resolve(arr);
//     }, 700);
//   });
// }

// getNumbers()
//   .then((numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//       console.log(numbers[i]);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/////////////////////////6/////////////////////////

// function unstableOperation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = Math.random();
//       if (num > 0.5) {
//         resolve("Success");
//       } else {
//         reject("Random failure");
//       }
//     }, 1000);
//   });
// }
// unstableOperation()
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////////////////////////////7//////////////////////////

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { name: "Dana", age: 16 };
//       resolve(user);
//     }, 1000);
//   });
// }

// getUser()
//   .then((obj) => {
//     console.log(obj);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////////////////////////////8////////////////////////

// function squarePositive(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (n >= 0) {
//         resolve(n * n);
//       } else reject("Negative number not allowed");
//     });
//   });
// }

// squarePositive(-2)
//   .then((resold) => {
//     console.log(resold);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

///////////////////////////9//////////////////////////////////

// function waitTwoSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done waiting");
//     }, 2000);
//   });
// }

// waitTwoSeconds()
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
///////////////////////////10//////////////////////////////////

// function downloadFile(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url.startsWith("http")) {
//         resolve("Downloaded from URL");
//       } else {
//         reject("Invalid URL");
//       }
//     });
//   });
// }

// downloadFile("htp fdsf")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/////////////////////////////4444444444//////////////////////
///////////////////////////11//////////////////////////////////

// function getUserName(userName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(userName);
//     }, 1000);
//   });
// }

// getUserName("dana")
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//////////////////////////12////////////////////////////////

// function loadScore(score) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(score);
//     }, 1500);
//   });
// }

// loadScore(31)
//   .then((score) => {
//     console.log(score);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////13////////////////////////////////

// function checkLogin(bool) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bool) {
//         resolve("User is logged in");
//       } else {
//         reject("User is not logged in");
//       }
//     },2000);
//   });
// }

// checkLogin()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////14////////////////////////////////

// function getProductPrice(productId, price) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(price);
//     }, 1200);
//   });
// }

// getProductPrice("123", 99.99)
//   .then((data) => {
//     console.log( "Requesting product price: " + data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//////////////////////////15////////////////////////////////

// function loadConfig() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const obj = { env: "dev", debug: true };
//       resolve(obj);
//     });
//   });
// }
// loadConfig()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////16////////////////////////////////

// function addAsync(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     });
//   });
// }

// addAsync(2, 3)
//   .then((add) => {
//     console.log(add);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////17////////////////////////////////

// function getFirstAsync(arr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(arr[0]);
//     });
//   });
// }

// getFirstAsync([2, 3])
//   .then((add) => {
//     console.log(add);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////17////////////////////////////////

// function isEvenAsync(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number % 2 == 0) {
//         resolve(true);
//       }else{reject(false)}
//     });
//   });
// }

// isEvenAsync(3)
//   .then((number) => {
//     console.log(number);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/////////////////////////////////////555555555555555////////////////////////////////////
//////////////////////////////////////////////1///////////////////////////////////////////

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Dana" });
    });
  });
}

function getScore(userId){
    return Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        })
    })
 } 


 


