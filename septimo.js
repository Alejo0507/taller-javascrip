
const sumarRango=(a,b)=>{
    let suma=0
    if(a==b){
        console.log(0)
    }else{
        for(i=a;i<=b;i++){
            suma=suma+i
        }
        console.log(suma)
    }
    
}
console.log(sumarRango(0,10))
console.log(sumarRango(12, 14))
console.log(sumarRango(5, 6))