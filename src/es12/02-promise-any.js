const newPromise =  new Promise((resolve,reject)=> reject('Reject'));
const promise2 =  new Promise((resolve,reject)=> resolve('REsolve'));
const promise3 =  new Promise((resolve,reject)=> resolve('REsolve2'));

Promise.any([newPromise,promise2,promise3]) // agarra la primera respuesta que sea satisfactoria
 .then(Response => console.log(Response));

 

