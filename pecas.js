let listaDePecas= [
    {nome: "escapamento", peso:10000},  
    {nome: "volante", peso:500},
    {nome: "porta" ,peso:20000},        
    {nome: "parafuso" ,peso:10}, 
    {nome: "wd",peso:150}
  ] 
let quantidadeItens = listaDePecas.length;
if(quantidadeItens >10){
    console.log("limite de 10 peças excedido");
}else{
    for(let contador= 0 ;contador < quantidadeItens; contador++){
        let peca =listaDePecas[contador].nome;
        let peso =listaDePecas[contador].peso;
      
        if(peca.length <3){
            console.log(`A peça ${peca} não pode ser cadastrada,possui menos de 3 caracteres!`);
        }else if(peso <= 100){
            console.log(`A peça ${peca}, com peso de ${peso}g, não pode ser cadastrada, possui o peso insulficiente!`);
        }
    }
}