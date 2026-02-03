//Task 1

function createClickCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(`Button clicked ${count} times`);
  };
}

const buttonClick = createClickCounter();
document.getElementById("myBtn").addEventListener("click", buttonClick);

//Task 2

function greet(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 2000);
}

greet("Mohammed", message => console.log(message));

//Task 3

function greetPromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 2000);
  });
}

greetPromise("Mohammed").then(msg => console.log(msg));

//Task 4

async function greetAsync(name) {
  try {
    const message = await greetPromise(name);
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
}

greetAsync("Mohammed");

//Task 5

const user = { id: 1, name: "Mohammed", role: "Student" };
const { id, name, role } = user;

console.log(id, name, role);

//Task 6

function loginCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(`Login attempt #${count}`);
  };
}

const login = loginCounter();
login();
login();

//Task 7

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve({ data: "User data loaded" });
      else reject("API error");
    }, 1500);
  });
}

fakeApiCall()
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

  //Task 8

  async function fetchUser() {
  try {
    const response = await fakeApiCall();
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchUser();

//Task 9

const cart = ["apple", "banana"];
const newItems = ["orange", "grapes"];

const updatedCart = [...cart, ...newItems];
console.log(updatedCart);

//Task 10

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15