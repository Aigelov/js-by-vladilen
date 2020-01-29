
/** First version Classes */
class Calc {
  constructor(n) {
    this._n = n;
  }
  mul(m) {
    this._n *= m;
    return this;
  }
  div(k) {
    this._n /= k;
    return this;
  }
  result() {
    return this._n;
  }
}
const calc = new Calc(5);
console.log(
  calc
    .mul(4)
    .div(2)
    .result()
);


/** Second version Prototype */
// function Calc(n) {
//   this.n = n;
// }
// Calc.prototype.mul = function(m) {
//   this.n *= m;
//   return this;
// };
// Calc.prototype.div = function(k) {
//   this.n /= k;
//   return this;
// };
// Calc.prototype.result = function() {
//   return this.n;
// };
// const calc = new Calc(5);
// console.log(
//   calc
//   .mul(4)
//   .div(2)
//   .div(2)
//   .mul(15)
//   .result()
// );


/** Third version Function with closure */
// const calc = (n) => {
//   return {
//     mul(m) {
//       n *= m
//       return this;
//     },
//     div(k) {
//       n /= k
//       return this;
//     },
//     result() {
//       return n;
//     }
//   }
// }
// console.log(
//   calc(5)
//   .mul(4)
//   .div(2)
//   .div(2)
//   .mul(15)
//   .result()
// );