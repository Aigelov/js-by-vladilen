class Programmer {
  constructor(name) {
    this.name = name;
  }

  canCode() {
    console.log(`${this.name} can code...`);
  }
}

class Frontend extends Programmer {
  canCodeOnAngular() {
    console.log(`${this.name} can code on Angular...`);
  }
}

class Backend extends Programmer {
  canCodeOnNodeJS() {
    console.log(`${this.name} can code on NodeJS...`);
  }
}

class FullStack extends Frontend {
}

const programmer = new Programmer('Programmer');
programmer.canCode();
const frontend = new Frontend('Frontend');
frontend.canCode();
frontend.canCodeOnAngular();
const backend = new Backend('Backend');
backend.canCode();
backend.canCodeOnNodeJS();
const fullStack = new FullStack('FullStack');
fullStack.canCode();
fullStack.canCodeOnAngular();
backend.canCodeOnNodeJS.apply(fullStack);