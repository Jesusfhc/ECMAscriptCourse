// desestructuracion de arrays

let fruits = ['applel', 'banna'];
let [a, b] = fruits;
console.log(a,b);

//desestructuracion de objects

let user = {username: 'Jesus', age: 23};
let {username, age} = user;
console.log(username, age);

// spread operator 
// De esta menara podemos obtener rapidamente los valores de un object

let person = {name:'Jesus', age:28};
let country = 'Vnzla';
let data = {id:1, ...person, country};
console.log(data);

//rest operator
// crea automaticamente un array de todos los valores que se le pasen

function restT(n, ...values) {
    console.log(values);
}
restT(1, 2,3,4,5,6);

// spread operator with JSON

let jsons = { ...json1, ...json2};






