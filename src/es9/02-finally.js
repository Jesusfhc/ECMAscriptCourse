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
 .then(Response => console.log(Response)) 
 .catch(err => console.log(err)) 
 .finally(()=> {console.log('finnaly')});

