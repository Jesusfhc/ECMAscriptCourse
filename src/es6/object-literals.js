//object literals

function newUser(name,age,country) {
    return {
        name:name,
        age:age,
        country:country
    }
}

// mejorado de ECMA6 no existe la necesidad de doble asignar si se llaman igual

function newUser(name,age,country) {
    return {
        name,
        age,
        country
    }
}