// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n);
//   }
// }
// const calc = createCalcFunction(42);
// const calc2 = createCalcFunction(43);
// calc();
// calc2();


// function createIncrement() {
//   let n = 10;
//   return function(m) {
//     n++;
//     return n + m;
//   }
// }
// const addOne = createIncrement();
// const addTwo = createIncrement();
// console.log(addOne(5));
// console.log(addTwo(7));
// console.log(addTwo(12));
// console.log(addTwo(15));


// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }
// const comUrl = urlGenerator('com');
// const kzUrl = urlGenerator('kz');
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(kzUrl('otgroup'));


/** Custom function BIND */
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = {name: 'Vladilen', age: 27, job: 'Frontend'};
const person2 = {name: 'Galym', age: 31, job: 'Backend'};

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args)
  };
}

bind(person1, logPerson)();
bind(person2, logPerson)();