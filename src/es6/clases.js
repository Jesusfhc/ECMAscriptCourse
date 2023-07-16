//clases, una manera de poder generalizar propiedades y metodos que despues se pueden instaciar en varios objetos


class User {
    //constructor de propiedades
    constructor(nombre, age) {
        this.nombre = nombre; //this es la palabra reservada que hace refrencia al elemento padre que lo contiene
        this.age = age;
        console.log('instanciado nuevo objeto');// este tipo de funciones son ejecutadas al momento de instanciar un objeto con la clase
    }

    //metodos sin palabras reservadas, no acepta arrow functions
    saludo() {
        return 'hello'
    }
    greetings() {
        return `${this.saludo} mi nombre es ${this.nombre}`
    };//manera de utilizar propiedades o metodos creados

    //setter getters
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }

};

const newUser = new User();
newUser.saludo();

const developer = new User('jesus');
console.log(developer.nombre);

const bebeloper = new User('Jesus', 15);
console.log(bebeloper.uAge); //en esta instancia se utiliza el metodo getter ya que solo se solicita
console.log(bebeloper.uAge = 20);// en esta instancia se utiliza el metodo setter ya que se le esta asignando un valor
