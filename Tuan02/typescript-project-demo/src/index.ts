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

// Promise.race([
//   simulateTaskSimple(1000),
//     simulateTaskSimple(2000),
//     simulateTaskSimple(1500)
// ]).then((result) => {  
//     console.log("First task completed:", result);
//     }
// );

// 8. Create a Promise chain: square the number 2, then double it, then add 5.

const promiseChain = Promise.resolve(2)
    .then((num) => num * num) 
    .then((num) => num * 2)  
    .then((num) => num + 5);  
// promiseChain.then((result) => console.log("Final result of promise chain:", result));

// 9. Write a Promise that reads an array after 1 second and filters even numbers.

const readAndFilterArray = new Promise<number[]>((resolve) => {
  setTimeout(() => resolve([1, 2, 3, 4, 5, 6]), 1000);
});
// readAndFilterArray
//   .then((arr) => arr.filter((num) => num % 2 === 0))
//   .then((evenNumbers) => console.log("Even numbers:", evenNumbers));

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

// readAndFilterArray
//     .then((arr) => arr.filter((num) => num % 2 === 0))
//     .then((evenNumbers) => console.log("Even numbers:", evenNumbers))
    // .finally(() => console.log("Done"));

// 11. Convert Exercise 1 into async/await.

// const runHelloAsync = async () => {
//     const message = await helloAsync;
//     console.log(message);
// };
// runHelloAsync();
// 12. Write an async function that calls simulateTask(2000) and logs the result.

// simulateTask("Example Task", 2000).then((result) => console.log(result));

// 13. Handle errors using try/catch with async/await.

// const runWithErrorHandling = async () => {
//     try {
//         const result = await simulateTask("Error Handling Task", 2000);
//         console.log(result);
//     } catch (error) {
//         console.error("Error occurred:", error);
//     }
// };
// runWithErrorHandling();


// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.


// const multiplyAfterDelay = async (num: number): Promise<number> => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(num * 3), 1000);
//     });
// };
// multiplyAfterDelay(5).then((result) => console.log("Result after delay:", result));


// 15. Call multiple async functions sequentially using await.

// const runTasksInParallel = async () => {
//     const [task1, task2] = await Promise.all([
//         simulateTask("Parallel Task 1", 1000),
//         simulateTask("Parallel Task 2", 500)
//     ]);
//     return [task1, task2];  
// }
// runTasksInParallel().then((results) => {
//     console.log("Parallel Tasks Results:", results);
// });
// 16. Call multiple async functions in parallel using Promise.all().

// const runTasksInParallel = async () => {
//     const [task1, task2] = await Promise.all([
//         simulateTask("Parallel Task 1", 1000),
//         simulateTask("Parallel Task 2", 500)
//     ]);
//     return [task1, task2];  
// }
// runTasksInParallel().then((results) => {
//     console.log("Parallel Tasks Results:", results);
// });

// 17. Use for await...of to iterate over an array of Promises.


// const promiseArray = [
//     simulateTask("For Await Task 1", 1000),
//     simulateTask("For Await Task 2", 500),
//     simulateTask("For Await Task 3", 1500)
// ];

// const runForAwaitOf = async () => {
//     for await (const result of promiseArray) {
//         console.log("for await...of result:", result);
//     }
// };

// runForAwaitOf();

// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).

type User = {
    id: number;
    name: string;
};

const fetchUser = async (id: number): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
};

// fetchUser(1).then((user) => console.log("Fetched user:", user));

// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.

const fetchUsers = async (ids: number[]): Promise<User[]> => {
    const promises = ids.map((id) => fetchUser(id));
    return Promise.all(promises);
};

fetchUsers([1, 2, 3]).then((users) => console.log("Fetched users:", users));

// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.