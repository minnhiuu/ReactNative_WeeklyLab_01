# TypeScript Promises, Async/Await, and Fetch API Exercises

This project contains a series of exercises designed to help you understand and implement concepts related to Promises, Async/Await, and the Fetch API in TypeScript.

## Project Structure

The project is organized into the following directories and files:

- `src/`
  - `promises/`
    - `index.ts`: Contains implementations for various Promise-related exercises.
  - `asyncAwait/`
    - `index.ts`: Includes implementations for exercises using async/await.
  - `fetchApi/`
    - `index.ts`: Contains implementations for exercises related to the Fetch API.
  - `types/`
    - `index.ts`: Exports necessary TypeScript types or interfaces used throughout the project.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file specifying compiler options.
- `README.md`: Documentation for the project.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd typescript-promises-async-fetch
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Compile the TypeScript files**:
   ```
   npx tsc
   ```

4. **Run the exercises**:
   You can run the exercises by executing the compiled JavaScript files in the `dist` directory or by using a tool like `ts-node` for direct execution of TypeScript files.

## Exercises Overview

- **Promises**: Explore how to create and handle Promises, including resolving values, simulating tasks, and using `Promise.all()`, `Promise.race()`, and chaining.
  
- **Async/Await**: Learn how to convert Promise-based code to async/await syntax, handle errors with try/catch, and execute async functions sequentially and in parallel.

- **Fetch API**: Practice using the Fetch API to retrieve data from public APIs, process responses, handle POST requests, simulate file downloads, and implement retry logic for API calls.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional exercises, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.