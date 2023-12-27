// const exObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: {
//     f: "S",
//   },
// };
// const { ...newObj } = exObj;
// console.log(exObj);
// console.log(newObj);
// newObj.a = 1000000;
// newObj.e.f = "T";
// console.log(newObj);
// console.log(exObj);

// const { e, ...rest } = exObj;
// console.log(exObj);
// console.log(e);
// console.log(rest);

function iamCallback() {
  console.log("I am CallBack");
}

function iamCallBackCaller(func) {
  console.log("iamCallBackCaller called");
  func();
}

iamCallBackCaller(iamCallback);
