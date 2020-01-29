
// console.log('Request data...');
// setTimeout(() => {
//   console.log('Preparing data...');
//   const backendData = {
//     server: 'Aws',
//     port: 2000,
//     status: 'Working'
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData)
//   }, 1000);
// }, 1000);


// console.log('Request data...');
// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//       server: 'Aws'
//     };
//     resolve(backendData);
//   }, 1000);
// });
// promise1.then(result => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       result.modified = true;
//       resolve(result);
//     }, 1000);
//   });
// })
//   .then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then(data => {
//     setTimeout(() => {
//       console.log('Modified data', data);
//     }, 1000);
//   })
//   .catch(err => console.error(`Error: ${JSON.stringify(err)}`))
//   .finally(() => console.log('Finally'));


// const delay = ms => new Promise(resolve => {
//   return setTimeout(() => {
//     resolve();
//   }, ms);
// });
// delay(500).then(() => console.log('After 500 milli seconds'));
// delay(1500).then(() => console.log('After 1500 milli seconds'));
// Promise.all([delay(1000), delay(3000)])
//   .then(() => {
//     console.log('All promises');
//   });
// Promise.race([delay(1000), delay(3000)])
//   .then(() => {
//     console.log('Race promises');
//   });


/** Chaining */
// let promise = new Promise(function(resolve) {
//   setTimeout(() => resolve(1), 500); // (*)
// });
// promise
//   .then(function(result) { // (**)
//     console.log(result); // 1
//     return result * 2;
//   }).then(function(result) { // (***)
//     console.log(result); // 2
//     return result * 2;
//   }).then(function(result) {
//     console.log(result); // 4
//     return result * 2;
//   });


/** Not chaining */
// let promise2 = new Promise(function(resolve) {
//   setTimeout(() => resolve(1), 1000);
// });
// const data1 = promise2.then(function(result) {
//   console.log(result); // 1
//   return result * 2;
// });
// const data2 = promise2.then(function(result) {
//   console.log(result); // 1
//   return result * 3;
// });
// const data3 = promise2.then(function(result) {
//   console.log(result); // 1
//   return result * 4;
// });
// data1.then(result => console.log('\n' + result));
// data2.then(result => console.log(result));
// data3.then(result => console.log(result));


/** Returning promises */
// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(1), 500);
// });
// promise
//   .then((result) => {
//     console.log(result); // 1
//     return new Promise((resolve) => { // (*)
//       setTimeout(() => resolve(result * 2), 500);
//     });
//   })
//   .then((result) => { // (**)
//     console.log(result); // 2
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 500);
//     });
//   })
//   .then((result) => {
//     console.log(result); // 4
//   });


// const fruitBasket = {
//   apple: 27,
//   grape: 0,
//   pear: 14
// };
// const fruitsToGet = ['apple', 'grape', 'pear'];
// const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms))
// };
// const getNumFruit = fruit => {
//   return sleep(1000).then(v => fruitBasket[fruit])
// };
// const forLoop = async _ => {
//   console.log('Start');
//
//   for (let index = 0; index < fruitsToGet.length; index++) {
//     const fruit = fruitsToGet[index];
//     const numFruit = await getNumFruit(fruit);
//     console.log(`${fruit.toUpperCase()}: ${numFruit}`)
//   }
//
//   await sleep(1000);
//   console.log('End')
// };
// forLoop();


// const promise1 = new Promise((resolve, reject) => {
//   resolve('Hello');
//   console.log(1);
//   reject('Error');
//   console.log(2);
// });
// promise1
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Finally'));


// new Promise((resolve, reject) => {
//   resolve("ок");
// })
//   .then(result => {
//     console.log(1);
//     throw new Error("Ошибка!");
//   }) // генерируем ошибку)
//   .catch(error => console.log('Error', error)); // Error: Ошибка!


// the execution: catch -> then
// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// })
//   .catch((error) => {
//     console.log("Ошибка обработана, продолжить работу");
//   })
//   .then(() => console.log("Управление перейдёт в следующий then"));


// the execution: catch -> catch -> then
// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// }).catch(function(error) { // (*)
//   if (error instanceof URIError) {
//     // обрабатываем ошибку
//   } else {
//     console.log("Не могу обработать ошибку");
//     throw error; // пробрасывает эту или другую ошибку в следующий catch
//   }
// }).then(function() {
//   /* не выполнится */
// }).catch(error => { // (**)
//   console.log(`Неизвестная ошибка: ${error}`);
//   // ничего не возвращаем => выполнение продолжается в нормальном режиме
// });


// new Promise(function() {
//   noSuchFunction(); // Ошибка (нет такой функции)
// })
//   .then(() => {
//     // обработчики .then, один или более
//   }); // без .catch в самом конце!


// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     // reject(new Error("Whoops!"));
//     throw new Error("Whoops!");
//   }, 500);
// })
//   .then(result => console.log('OK'))
//   .catch(error => console.log('ERROR', error));


let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
  .then(responses => {
    // все промисы успешно завершены
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.race(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => console.log(users));