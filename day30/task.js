//Section A: Conceptual Questions
// 1. What is asynchronous JavaScript? Why is it needed?
// - Definition: Asynchronous JavaScript allows code to run without blocking the main thread. Tasks like API calls, timers, or file reading can execute in the background while the rest of the program continues.
// - Need: Without it, long-running tasks (like fetching data) would freeze the browser, making apps unresponsive.

// 2. Explain callback functions with a real-life example.
// - Callback: A function passed into another function to be executed later.
// - Example: Ordering food at a restaurant. You give your order (callback) to the waiter. When the food is ready, the waiter calls you back with your meal.
function orderFood(callback) {
  console.log("Order placed...");
  setTimeout(() => {
    callback("Your food is ready!");
  }, 2000);
}

orderFood(message => console.log(message));



// 3. What is callback hell? Why is it a problem?
// - Callback Hell: When multiple nested callbacks are used, leading to deeply indented, hard-to-read code.
// - Problem: Difficult to maintain, debug, and scale.

// 4. Define a Promise and explain its states.
// - Promise: An object representing the eventual completion or failure of an asynchronous operation.
// - States:
// - Pending: Initial state, not yet resolved or rejected.
// - Fulfilled: Operation completed successfully.
// - Rejected: Operation failed.

// 5. Difference between callbacks and promises.
 
//  callbacks                               |   promise

//  Functions passed to handle async tasks  | Objects representing async results

//  Can lead to callback hell               | Easier chaining with .then()

//  Harder to debug                         | More readable and structured




// 6. Why is async/await preferred over .then()?
// - Reason: Async/await makes asynchronous code look synchronous, improving readability and debugging.
// - .then() chaining can still get messy with multiple steps.

// 7. Can await be used without async? Why?
// - No. await only works inside an async function because it pauses execution until the promise resolves.

// 8. What happens if a promise is rejected?
// - If not handled, it throws an unhandled promise rejection error.
// - Must be caught with .catch() or try...catch.

// 9. Explain error handling in async/await.
// - Use try...catch to handle errors gracefully:
async function fetchData() {
  try {
    const data = await fakeApiCall();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}



// 10. Write one real-world use case for asynchronous JavaScript.
// - Example: Fetching live weather data from an API without freezing the UI.

//  Section B: Coding Assignments
// 1. Callback with setTimeout
setTimeout(() => {
  console.log("Message after 3 seconds");
}, 3000);



// 2. Convert callback to promise
function delayedMessage() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Message after delay"), 2000);
  });
}



// 3. Promise that resolves after 2 seconds
const promise = new Promise(resolve => {
  setTimeout(() => resolve("Resolved after 2 seconds"), 2000);
});

promise.then(msg => console.log(msg));



// 4. Handle rejected promise
const failPromise = new Promise((_, reject) => {
  setTimeout(() => reject("Something went wrong"), 2000);
});

failPromise.catch(err => console.error(err));



// 5. Rewrite promise with async/await
async function run() {
  const msg = await promise;
  console.log(msg);
}
run();



// 6. Use try...catch with async/await
async function runFail() {
  try {
    const msg = await failPromise;
    console.log(msg);
  } catch (error) {
    console.error("Caught error:", error);
  }
}
runFail();



// 7. Function with random success/failure
function randomPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("Success!") : reject("Failure!");
    }, 1000);
  });
}



// 8. Chain two .then() methods
randomPromise()
  .then(msg => {
    console.log("First:", msg);
    return "Next step";
  })
  .then(next => console.log("Second:", next))
  .catch(err => console.error(err));



// 9. Async function waiting for two promises
async function waitTwo() {
  const p1 = Promise.resolve("First done");
  const p2 = Promise.resolve("Second done");

  const [res1, res2] = await Promise.all([p1, p2]);
  console.log(res1, res2);
}
waitTwo();



// 10. Explain async function output
async function example() {
  return "Hello World";
}

example().then(console.log); 
// Output: Promise resolves to "Hello World"
// Async functions always return a Promise.



// Section C: Scenario-Based Questions

// 1. How would you handle an API call that takes time to respond?
// - Show a loading spinner while waiting. Use async/await with error handling to manage delays.

// 2. Why should long tasks not block the main thread?
// - The main thread handles UI. Blocking it makes the app freeze and unresponsive.

// 3. Which async method would you choose for a large application and why?
// - Async/await because it improves readability, debugging, and avoids complex .then() chains.

// 4. How do promises improve readability?
// - They flatten nested callbacks into a cleaner .then() chain, making flow easier to follow.

// 5. How does async/await simplify debugging?
// - Code looks synchronous, so stack traces are easier to read. Errors can be caught with try...catch.
