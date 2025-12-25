let array = [10, 20, 30, 40, 50];
let specificvalue = 80;
let found = false;
for (let i of array) {
  if (specificvalue === i) {
    found = true;
    break;
  }
}
if (found) {
  console.log("The given value is found");
} else {
  console.log("the given value is not found");
}