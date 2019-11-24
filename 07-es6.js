// class Animal {
//   static type = 'ANIMAL';
//
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//
//   voice() {
//     console.log(`I am ${this.name}`);
//   }
// }
// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// });
// class Cat extends Animal {
//   static type = 'CAT';
//
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//
//   voice() {
//     super.voice();
//     console.log(`Hello ${this.name}`);
//   }
//
//   get ageInfo() {
//     return this.age * 7;
//   }
//
//   set ageInfo(value) {
//     this.age = value;
//   }
// }
// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: 'white'
// });


class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}
class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.background;
  }
}
const box1 = new Box({
  selector: '#box1',
  size: 100,
  background: 'green'
});
const box2 = new Box({
  selector: '#box2',
  size: 120,
  background: 'blue'
});
class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = '50%'
  }
}
const circle1 = new Circle({
  selector: '#circle1',
  size: 90,
  background: 'black'
});