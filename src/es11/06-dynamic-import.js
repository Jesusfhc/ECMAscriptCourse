// de esta manera solo carga de manera los archivos de inicio, y carga los demas dinamicamente, haciendo mas efectivamente las paginas.

const btn = document.querySelector('#btn');

btn.addEventListener('click', async () => {
    const module= await import('./module.mjs'); //asi se importa el archivo completo, con todas sus exportaciones
    console.log(module);
    module.hello();
});