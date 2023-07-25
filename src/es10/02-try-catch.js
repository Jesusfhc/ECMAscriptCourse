try {
    hello();
} catch (error) {
    console.log(error)
}

// se volvio mas dinamico el manejo con mensajes personalizados

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}
