const capitalizar = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

console.log(capitalizar("hola mundo"));
console.log(capitalizar("pedro"));
console.log(capitalizar(""));