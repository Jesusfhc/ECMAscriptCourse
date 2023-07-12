// se usan cuando no se saben cuando llegaran los datos o si llegaran

const anotherFunction = () => {
    return new Promise((resolve, reject) => { //dentro de la funcion, creamos un nuevo objeto de promesa, este tiene dos parametros resolve y reject
        if (true) {
            resolve('Hey'); //resolve es el return que sucede si en efecto se consiguen los datos
        } else {
            reject('whooooops!') // reject es el return que sucede si ocirre un error con los datos
        }
    })
}

anotherFunction()
 .then(Response => console.log(Response)) // para obtener dichos datos tenemos el then() para obtener los datos si se lograron obtener
 .catch(err => console.log(err)) // y tenemos catch para obtener el mensaje que confirma que ocurrio un error con los datos

 
