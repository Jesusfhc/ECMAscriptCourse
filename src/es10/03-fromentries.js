//pasando un array de arrays a un objeto

const entries = new Map([['name', 'oscar'], ['age', 34], ['country', 'venezuela']]);

console.log(entries);
console.log(Object.fromEntries(entries));

