// const fetch = require('fetch');

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
};
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const fetchTodos = () => {
//   console.log('Fetch todo started...');
//   return delay(1000)
//     .then(() => fetch(url))
//     .then(response => response.json());
// };
// fetchTodos()
//   .then(data => {
//     console.log(`Data: ${data}`)
//   })
//   .catch(e => console.error(e));

const fetchAsyncTodos = async () => {
  console.log('Fetch todo started...');
  try {
    await delay(1000);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(`Data: ${JSON.stringify(data)}`);
    return JSON.stringify(data);
  } catch (error) {
    console.error(error);
  }
};
fetchAsyncTodos()
  .then(result => {
    console.log(`Data: ${result}`)
  });