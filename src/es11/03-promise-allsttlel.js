const newPromise =  new Promise((resolve,reject)=> reject('Reject'));
const promise2 =  new Promise((resolve,reject)=> resolve('REsolve'));
const promise3 =  new Promise((resolve,reject)=> resolve('REsolve2'));

Promise.allSettled([newPromise,promise2,promise3])
 .then(Response => console.log(Response));