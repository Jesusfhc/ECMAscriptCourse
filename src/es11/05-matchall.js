// esto sirve para saber si esta y en que indice del input
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banna kiwi, Apple, orange';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}