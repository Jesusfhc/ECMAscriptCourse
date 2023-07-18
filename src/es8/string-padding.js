//el primer paraetro define cuanto debe medir el string, el segundo con que se quiere rellenar. ya sea al principio con start o al final

const string = 'hello';

console.log(string.padStart(7, 'hi'))

console.log(string.padEnd(6, '_'));