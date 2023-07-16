//archivo de codigo donde se recive lo exportado

import hello from "./module.js"; //palabras reservadas para importar al archivo el codigo que queremos llamar del modulo

hello(); // llamada a la funcion creada en e modulo

/*en el package.json se debe agregar un 'type': 'module' para que sepan que se trabajara con modulos. 
Otra manera de corregir este error es agregar la extension .mjs al archivo en donde se crea el modulo 
para que javascript automaticamente lor econozca como un modulo*/

// maneras de importar
import myFunction from "./myFunction"
import {myFunction} from "./myFunction"
