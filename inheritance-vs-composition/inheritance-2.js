class Programmer {
  constructor(name, prop={}) {
    this.name = name;
    this.add(prop);
  }

  code() {
    console.log(`${this.name} can code...`);
  }

  add(prop) {
    Object.entries(prop).forEach(([key, value]) => this[key] = value);
  }
}

function angular() {
  console.log(`${this.name} can code on Angular...`);
}

function vue() {
  console.log(`${this.name} can code on Vue...`);
}

function node() {
  console.log(`${this.name} can code Node JS...`);
}

function react() {
  console.log(`${this.name} can code on React...`);
}


const programmer = new Programmer('Programmer',{react,angular}); // Programmer знает react и angular
programmer.add({node,vue}); //Выучил node и vue
console.log(programmer);
programmer.code();
programmer.angular();