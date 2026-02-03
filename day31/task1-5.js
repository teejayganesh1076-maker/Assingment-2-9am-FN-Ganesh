// 1. Explain what an API is in your own words
// - API (Application Programming Interface): A way for two systems to talk to each other.
// - Example: When you use a weather app, it doesn’t calculate weather itself—it calls a weather API to fetch data from a server.

//Task 2

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

//Task 3

const user = { id: 1, name: "Mohammed", role: "Student" };
const jsonString = JSON.stringify(user);

console.log(jsonString); 

//Task 4

localStorage.setItem("username", "Mohammed");

const name = localStorage.getItem("username");
console.log(name); 

//5. Difference between localStorage and sessionStorag

//Feature      | Local Storage                           | sessionStorage 

//Persistence  | Data stays even after browser is closed | Data is cleared when tab/browser is closed

//Scope        | Shared across all tabs of same origin   | Specific to one tab/session

//Use Case     | Save login info, theme preferences      | Temporary data like form progress

//Task 6
