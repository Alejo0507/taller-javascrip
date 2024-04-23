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