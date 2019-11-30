const obj = {
  name: 'Vladilen',
  age: 26,
  job: 'Fullstack'
};
const entries = [
  ['name', 'Vladilen'],
  ['age', 26],
  ['job', 'Fullstack']
];
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));
const map = new Map(entries);
map
  .set('newField', 42)
  .set('job', 'Backend')
  .set(obj, 'Value of object');
// console.log(map.set(NaN, 'NaN ??'));
// console.log('DELETE KEY JOB', map.delete('job'));
// console.log('HAS KEY JOB', map.has('job'));
// console.log('MAP SIZE', map.size);
// console.log('MAP CLEAR', map.clear());
// console.log('MAP SIZE', map.size);
// console.log(map);


// ==================
// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let val of map.values()) {
//   console.log(val);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((val, key, m) => {
//   console.log(val, key);
// });


// ==================
// const array = [...map];
// const array = Array.from(map);
// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);


// ==================
const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'}
];
const visits = new Map();
visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60));
function lastVisit(user) {
  return visits.get(user)
}
console.log(lastVisit(users[1]));