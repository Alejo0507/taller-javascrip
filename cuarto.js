const imprimirArreglo = (...args) => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

console.log(imprimirArreglo(1, "hola", 3, "Mundo"))
