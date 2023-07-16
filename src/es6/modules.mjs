// modulos, manera de separar codigo por archivo y solo importar lo que neceita el main code

// archivo de modulo, se debe crear un archivo js que funcone unicamente de modulo
const hello = () => {
    console.log('Hello!')
}

export default hello; //reserve words para exportar

// export default myFunction; aca se senala como un modulo no puede tener mas de una importacion por defecto
export {myFunction}; // otra manera de exportar

