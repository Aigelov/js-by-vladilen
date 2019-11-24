// const person = {
//   name: 'Vladilen',
//   age: 25,
//   greet: function() {
//     console.log('Greet');
//   }
// };

const person = new Object({
  name: 'Vladilen',
  age: 25,
  greet: () => {
    return 'Greet';
  }
});
Object.prototype.sayHello = () => {
  return 'Hello!';
};
const lena = Object.create(person);
lena.name = 'Elena';

// const str = 'I am string';
const str = new String('I am string');