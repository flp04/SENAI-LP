//let x = 5;
let x = Math.floor(Math.random()*10);
if(x%2==0){
    if(x==0){
        console.log(x);
    }else{
        console.log("o número é par: " + x);
    }
}else{
    console.log('o número é impar: ' + x);
}