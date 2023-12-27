// const async1 = setTimeout(() => {
//   console.log("async1");
// }, 2000);

// const async2 = setTimeout(() => {
//   console.log("async2");
// }, 1000);

// const async3 = setTimeout(() => {
//   console.log("async3");
// }, 5000);

// let timer = 4;

// const intervalID = setInterval(() => {
//   timer++;
//   console.log("1 Sec Elapsed");
//   if (timer === 12) {
//     clearInterval(intervalID);
//   }
// }, 5000);

/* 

promise -->(rejected,fulfilled)

*/

// let myPromse = new Promise((myResolve, myReject) => {
//   let x = 0;

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("ERROR");
//   }
// });

// myPromse.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => console.log(error)
// );

// const API_URL = "https://api.github.com/users/hoysal08";

// const asyncChecker = async () => {
//   const user = await fetch(API_URL);
//   let userInfo = await user.json();
//   console.log(userInfo);
// };
// asyncChecker();

console.log(document)
