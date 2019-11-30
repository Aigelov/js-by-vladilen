const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
set
  .add(10)
  .add(20)
  .add(20)
  .add(30);
// console.log(set.has(23));
// console.log(set);
// console.log(set.delete(3));
// console.log(set.clear());
// console.log(set.size);
// console.log(set.entries());

// for (let value of set) {
//   console.log(value);
// }


// ====================
function uniqueValues(array) {
  return Array.from(new Set(array));
}
console.log(uniqueValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6]));