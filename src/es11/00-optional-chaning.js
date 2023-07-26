const users = {
    gndx: {
        country:'mx'
    },
    ana: {
        country:'co'
    }
};

console.log(users.gndx.country);
console.log(users?.bebeloper?.country) // de esta manera asi no exista no rompe el compilado, simplemente develve "undifined"