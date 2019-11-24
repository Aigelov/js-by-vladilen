const timeout = () => {
  console.log('SetTimeout 2');
};
console.log('Start');
setTimeout(() => {
  console.log('SetTimeout 1');
}, 1000);
setTimeout(timeout, 500);
console.log('End');