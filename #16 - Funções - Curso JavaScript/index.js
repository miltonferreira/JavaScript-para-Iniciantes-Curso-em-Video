function parimpar(n){
    if(n%2==0){
        return 'par!';
    }else{
        return 'impar!';
    }
}

var res = parimpar(224);

console.log(res);