//Task 7

function login(username) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  console.log(`${username} logged in`);
}

function checkLogin() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    console.log("User is logged in:", localStorage.getItem("username"));
  } else {
    console.log("No user logged in");
  }
}

login("Mohammed");
checkLogin();

//Task 9

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchData();

//Task 10

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart items:", cart);
}

addToCart({ id: 1, name: "Apple", price: 10 });
addToCart({ id: 2, name: "Banana", price: 5 });
showCart();