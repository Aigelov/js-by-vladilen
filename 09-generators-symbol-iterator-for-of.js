// function* strGenerator() {
//   yield 'H';
//   yield 'e';
//   yield 'l';
//   yield 'l';
//   yield 'o';
// }
// const str = strGenerator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


// function* numberGen(n = 10) {
//   for (let i = 1; i <= n; i++) {
//     yield i;
//   }
// }
// const number = numberGen(5);
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());


// const iterator = {
//   gen(n = 5) {
//     let i = 0;
//     return {
//       next() {
//         if (i < n) {
//           return {
//             value: i++,
//             done: false
//           }
//         }
//         return {
//           value: undefined,
//           done: true
//         }
//       }
//     }
//   }
// };
// const itr = iterator.gen();
// console.log(itr.next());


// for (let k of 'Hello') {
//   console.log(k);
// }
// for (let k of [1, 1, 2, 3, 5, 8, 13]) {
//   console.log(k);
// }


// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }
// for (let k of iter(7)) {
//   console.log(k);
// }