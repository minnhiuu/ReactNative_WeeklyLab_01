export const helloAsync = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 1000);
    });
};

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

export const runTasksInParallel = async () => {
    const results = await Promise.all([
        simulateTask("Task 1", 1000),
        simulateTask("Task 2", 500),
    ]);
    return results;
};

export const raceTasks = async () => {
    const result = await Promise.race([
        simulateTask("Task 1", 1000),
        simulateTask("Task 2", 500),
    ]);
    return result;
};