let obj = {name: 'weakMap'};
// const arr = obj;
// obj = null;
// console.log(obj);
// console.log(arr);
const map = new WeakMap([
  [obj, 'Object data 1']
]);
obj = null;

// get set delete has
// console.log(map.has(obj));
// console.log(map.get(obj));



// =========================
const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}
let lena = {name: 'Lena'};
let alex = {name: 'Alex'};
cacheUser(lena);
cacheUser(alex);
lena = null;
console.log(cache.has(lena));
console.log(cache.has(alex));