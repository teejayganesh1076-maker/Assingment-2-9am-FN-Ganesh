//Task 1

//  Wrong
// let x = 10
// if (x > 5 {
//   console.log("Greater than 5");
// }

// ✅ Fixed
let x = 10;
if (x > 5) {
  console.log("Greater than 5");
}

// Task 2

// ❌ Wrong
// let arr = [1, 2, 3];
// console.log(arr[5].toString()); 

// ✅ Fixed
if (arr[5] !== undefined) {
  console.log(arr[5].toString());
} else {
  console.log("Index out of range");
}

//Task 3

//  ❌ Wrong
// let age = 20;
// if (age < 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// ✅ Fixed
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Task 4

let obj = null;
console.log(obj.name);

// Task 5

function add(a, b) {
  console.log("a:", a, "b:", b); // Debugging
  return a + b;
}
console.log(add(5, 10));

// Task 9

// ❌ Broken
// function greet(name) {
//   console.log("Hello " + names); // 'names' is undefined
// }

// ✅ Fixed
function greet(name) {
  console.log("Hello " + name);
}
greet("Mohammed");