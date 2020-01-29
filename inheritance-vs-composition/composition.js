function createProgrammer(name) {
  const programmer = {name};
  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} can code...`)
  }
}

function createFrontend(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canCodeOnAngular(programmer)
  }
}

function canCodeOnAngular({ name }) {
  return {
    angular: () => console.log(`${name} code on Angular`)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canCodeOnNodeJS(programmer)
  }
}

function canCodeOnNodeJS({ name }) {
  return {
    nodeJS: () => console.log(`${name} code on Node JS`)
  }
}

function createFullStack(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canCodeOnAngular(programmer),
    ...canCodeOnNodeJS(programmer)
  }
}

const programmer = createProgrammer('Programmer');
programmer.code();
const frontend = createFrontend('Frontend');
frontend.code();
frontend.angular();
const backend = createBackend('Backend');
backend.code();
backend.nodeJS();
const fullStack = createFullStack('FullStack');
fullStack.code();
fullStack.angular();
fullStack.nodeJS();