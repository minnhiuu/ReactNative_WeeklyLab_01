// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const helloAsync = new Promise((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});

// helloAsync.then((message) => console.log(message));


// 2. Create a function simulateTask that takes a task name and duration (in milliseconds) as parameters and returns a Promise that resolves with a message indicating the task is completed after the specified duration.
export const simulateTask = (taskName: string, duration: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} completed in ${duration}ms`);
        }, duration);
    });
};

export const runTasksSequentially = async () => {
    const task1 = await simulateTask("Task 1", 1000);
    const task2 = await simulateTask("Task 2", 500);
    return [task1, task2];
};

// runTasksSequentially().then((results) => {
//     console.log("Sequential Tasks Results:", results);
// });

// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.

// const errorPromise = new Promise((_, reject) => {
//   setTimeout(() => reject(new Error("Something went wrong")), 1000);
// });

// errorPromise.catch((error) => console.error(error.message));

// 4. Use .then() and .catch() to handle a Promise tDhat returns a random number.

// const randomNumber = new Promise<number>((resolve, reject) => {
//   const num = Math.random();
//   if (num >= 0) {
//     resolve(num);
//   } else {
//     reject(new Error("Failed to generate random number"));
//   }
// });

// randomNumber
//   .then((num) => console.log("Random number:", num))
//   .catch((err) => console.error("Error:", err.message));


// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.

const simulateTaskSimple = (time: number): Promise<string> => {
  return new Promise((resolve) => { 
    setTimeout(() => resolve("Task done"), time); 
  });
}   
// simulateTaskSimple(1500).then((message) => console.log(message));


// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.

// Promise.all([
//   simulateTaskSimple(1000),
//     simulateTaskSimple(2000),
//     simulateTaskSimple(1500)
// ]).then((results) => {  
//     console.log("All tasks completed:", results);
//     }
// );


// 7. Use Promise.race() to return whichever Promise resolves first.

Promise.race([
  simulateTaskSimple(1000),
    simulateTaskSimple(2000),
    simulateTaskSimple(1500)
]).then((result) => {  
    console.log("First task completed:", result);
    }
);

// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

