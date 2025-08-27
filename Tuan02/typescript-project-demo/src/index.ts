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

runTasksSequentially().then((results) => {
    console.log("Sequential Tasks Results:", results);
});
