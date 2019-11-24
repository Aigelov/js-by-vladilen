const people = [
  { name: 'Vladilen', age: 27, budget: 40000 },
  { name: 'Galym', age: 31, budget: 55000 },
  { name: 'Anar', age: 25, budget: 45000 },
  { name: 'Abylai', age: 2, budget: 15000 },
  { name: 'John', age: 40, budget: 20000 },
  { name: 'Snow', age: 37, budget: 30000 },
];

/** ForOf */
// for (let person of people) {
//   console.log(person);
// }
// for (let [index, person] of people.entries()) {
//   console.log(index, person);
// }

/** ForEach */
// people.forEach((person, index) => {
//   console.log(index, person)
// });

/** Map */
// const peopleMap = people.map(person => {
//   person.mapped = person.budget >= 40000;
//   return person;
// });
// console.log(peopleMap);

/** Filter */
// const peopleFilter = people.filter(person => person.age > 25);
// console.log(peopleFilter);

/** Reduce */
// const budgetTotal = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
// console.log(budgetTotal);

/** Find */
// const abylai = people.find(person => person.name === 'Abylai');
// console.log(abylai);

/** FindIndex */
// const abylaiIndex = people.findIndex(person => person.name === 'Abylai');
// console.log(abylaiIndex);

const peopleAll = people
  .map(person => {
    person.overThirty = person.age >= 30;
    return person;
  })
  .filter(person => person.overThirty)
  .find(person => person.budget >= 30000);
console.log(peopleAll);