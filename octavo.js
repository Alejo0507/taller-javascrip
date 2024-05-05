const contarletra=(palabra)=>{
    let  contador=0
    for(i=0;i<palabra.length;i++){
        if(palabra[i].toLowerCase() === "a"){
            contador++;
        }
    }
    console.log(contador)
}
console.log(contarletra("abracadabra"))
console.log(contarletra("etinol"))
console.log(contarletra(""))

const contarCaracter=(palabra,caracter)=>{
    let  contador=0
    for(i=0;i<palabra.length;i++){
        if(palabra[i].toLowerCase() === caracter){
            contador++;
        }
    }
    console.log(contador)
}
console.log(contarCaracter("Hola Mundo", "o"))
console.log(contarCaracter("MMMMM", "m"))
console.log(contarCaracter("eeee", "e"))