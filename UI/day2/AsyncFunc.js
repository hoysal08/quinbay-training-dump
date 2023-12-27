// function iamCallback() {
//   console.log("I am CallBack");
// }

// function iamCallBackCaller(func) {
//   console.log("iamCallBackCaller called");
//   setTimeout(func, 5000);
// }

// const timer1 = setTimeout(() => {
//   console.log("i am timer1");
// }, 1000);
// const timer2 = setTimeout(() => {
//   console.log("i am timer2");
// }, 3000);
// const timer3 = setTimeout(() => {
//   console.log("i am timer3");
// }, 500);
// iamCallBackCaller(iamCallback);

// const API_URL = 'https://api.github.com/users/hoysal08'

// const user = fetch(API_URL)

// console.log(user)
// user.then(res => {
//   return res.json()
// }).then((data) => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

// async function getPosts() {
//   console.log("called");
//   const GET_URL = "https://jsonplaceholder.typicode.com/todos/1";
//   let response = await fetch(GET_URL);
//   let data = await response.json();
//   console.log("Get Request", data);
// }

// async function addPosts() {
//   const POST_URL = "https://jsonplaceholder.typicode.com/posts";

//   const objectExample = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };
//   let response = await fetch(POST_URL, {
//     method: "POST",
//     body: JSON.stringify(objectExample),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   let data = await response.json();
//   console.log("Post request", data);
// }

// async function pustPost() {
//   const PUT = "https://jsonplaceholder.typicode.com/posts/1";

//   const objectExample = {
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };
//   let response = await fetch(PUT, {
//     method: "PUT",
//     body: JSON.stringify(objectExample),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   let data = await response.json();
//   console.log("Put Request", data);
// }

// getPosts();
// addPosts();
// pustPost();

document.getElementsByTagName("button")[0].innerHTML = "gggg";
document.getElementById("btn-1").innerHTML = "<b>HII</b>";
