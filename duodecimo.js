const adnAarn=(adn)=>{
    let arn=""
    for(i=0;i<adn.length;i++){
        if(adn[i]=="A"){
            arn+="U"
        }else if(adn[i]=="T"){
            arn+="A"
        }else if(adn[i]=="C"){
            arn+="G"
        }else if(adn[i]=="G"){
            arn+="C"
        }
        
    }
    return arn
}
console.log(adnAarn("ACGT"))
console.log(adnAarn("ACGTGGTCTTAA"))