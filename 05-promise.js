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


const delay = ms => new Promise(resolve => {
  return setTimeout(() => {
    console.log(ms);
    resolve();
  }, ms);
});
// delay(500).then(() => console.log('After 500 milli seconds'));
// delay(1500).then(() => console.log('After 1500 milli seconds'));
// Promise.all([delay(1000), delay(3000)])
//   .then(() => {
//     console.log('All promises');
//   });
Promise.race([delay(1000), delay(3000)])
  .then(() => {
    console.log('Race promises');
  });