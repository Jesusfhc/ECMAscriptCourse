// aqui estamos consumiendo una api a traves de fetch
// el nuevo await no necesita estar dentro de una funcion async

import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');

const products = await response.json();

export { products };

