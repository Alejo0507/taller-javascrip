const likes=(a)=>{
    if(a<1000){
        return a.toString();
    }else if(a<1000000){
        return Math.floor(a / 1000) + 'K';
    }else {
        return Math.floor(a / 1000000) + 'M';
        
    }

}
console.log(likes(983)) 
console.log(likes(1900)) 
console.log(likes(54000)) 
console.log(likes(120800)) 
console.log(likes(25222444)) 