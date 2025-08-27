"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceTasks = exports.runTasksInParallel = exports.runTasksSequentially = exports.simulateTask = exports.helloAsync = void 0;
const helloAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 1000);
    });
};
exports.helloAsync = helloAsync;
const simulateTask = (taskName, duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} completed in ${duration}ms`);
        }, duration);
    });
};
exports.simulateTask = simulateTask;
const runTasksSequentially = () => __awaiter(void 0, void 0, void 0, function* () {
    const task1 = yield (0, exports.simulateTask)("Task 1", 1000);
    const task2 = yield (0, exports.simulateTask)("Task 2", 500);
    return [task1, task2];
});
exports.runTasksSequentially = runTasksSequentially;
const runTasksInParallel = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Promise.all([
        (0, exports.simulateTask)("Task 1", 1000),
        (0, exports.simulateTask)("Task 2", 500),
    ]);
    return results;
});
exports.runTasksInParallel = runTasksInParallel;
const raceTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Promise.race([
        (0, exports.simulateTask)("Task 1", 1000),
        (0, exports.simulateTask)("Task 2", 500),
    ]);
    return result;
});
exports.raceTasks = raceTasks;
