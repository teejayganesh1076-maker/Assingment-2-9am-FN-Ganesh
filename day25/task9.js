const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedConcat = arr1.concat(arr2);
const combinedSpread = [...arr1, ...arr2];

console.log("Using concat:", combinedConcat);
console.log("Using spread:", combinedSpread);
