function hello() {
  return {
    1: 'Hello',
    2: this
  }
}
const person = {
  name: 'Vladilen',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};
const lena = {
  name: 'Elena',
  age: 23
};
// person.logInfo.apply(lena, ['Frontend', '+7705-781-24-02', 'Hello']);

/** Context and prototypes */
const arr = [1, 2, 3, 4, 5];
Array.prototype.multipleBy = function(multiplier) {
  if (multiplier === undefined) {
    return this;
  }
  return this.map(item => item * multiplier);
};
console.log(arr.multipleBy(5));