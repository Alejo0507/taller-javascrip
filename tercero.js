let imc=0
const calcularIMC=(peso,altura)=>{
    imc=peso/altura**2
    if(imc<18.5){
        console.log("Bajo de peso");
    }else if ((imc>=18.5)&&(imc<=24.9)){
        console.log("Normal");
    }else if((imc>=25)&&(imc<=29.9)){
        console.log("Sobrepeso");
    }else{
        console.log("Obeso")
    }
}
console.log(calcularIMC(65, 1.8))
console.log(calcularIMC(72, 1.6))
console.log(calcularIMC(52, 1.75))
console.log(calcularIMC(135, 1.7))