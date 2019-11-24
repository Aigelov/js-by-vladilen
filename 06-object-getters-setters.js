const person = Object.create(
  {
    calculateAge() {
      console.log(`Age: ${new Date().getFullYear() - this.birthYear}`);
    }
  },
  {
  name: {
    value: 'Vladilen',
    enumerable: true,
    writable: true,
    configurable: false
  },
  birthYear: {
    value: 1993,
    enumerable: true,
    writable: false,
    configurable: false
  },
  job: {
    value: 'Frontend',
    enumerable: true,
    configurable: true
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(value) {
      console.log(`Set age ${value}`);
    }
  }
});
person.name = 'Galym';
person.birthYear = 1988;
delete person.name;
delete person.job;
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`Key ${key}. Value ${person[key]}`);
  }
}