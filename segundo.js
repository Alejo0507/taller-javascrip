let impuesto=0
const calcularImpuestos=(edad,ingresos)=>{
    if((edad>=18)&&(ingresos>=1000)){
        impuesto=ingresos*0.4
        console.log(impuesto)
    }else{
        console.log(impuesto)
    }
}
console.log(calcularImpuestos(18, 1000))
console.log(calcularImpuestos(40, 10000))
console.log(calcularImpuestos(17, 5000))
console.log(calcularImpuestos(30,500))