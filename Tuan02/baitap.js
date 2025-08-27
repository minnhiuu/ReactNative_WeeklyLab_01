// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const helloAsync = new Promise((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});

console.log("hasdsadsadsa")
helloAsync.then((message) => console.log(message));

// 2. Use the Promise to log the message to the console and display it on a webpage.