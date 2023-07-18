// El async y el await son una metodologia de funciones para acceder mas eficientemente a la data de las promesas

const fnAsync = () => {
    return new Promise((resolve,reject)=> {
        (true)
            ? setTimeout(()=>{
                resolve('Async'), 2000})
            : reject(new Error('Error!'));    
    })
}

const anotherFunction = async () => {
    try {
        const something = await fnAsync();
        console.log(something);
        console.log('hello')
    } catch(err) {
        console.log(err.message)
    }
}

console.log('BEfore');
anotherFunction();
console.log('after')
