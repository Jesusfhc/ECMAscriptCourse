//aplana el array a un solo arrego
const array = [1,2,3,4,4, [1,2,3,4,[1,2,3,4]]];
console.log(array.flat(3));

// flatmap

const array2 = [1,2,3,4,5];
console.log(array2.flatMap((elemento)=> [elemento, elemento*2]));

//hace funcion de map y funcion de flat a la vez

