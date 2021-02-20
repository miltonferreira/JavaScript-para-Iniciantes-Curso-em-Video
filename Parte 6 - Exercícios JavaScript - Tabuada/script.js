function tabuada(){
    let num = document.querySelector("#txtn");
    let tab = document.querySelector("#seltab");

    if(num.value.length == 0){
        alert("Por Favor, digite um número!");
    } else {

        let n = Number(num.value);
        let c = 0;
        
        tab.innerHTML = ""; // limpa o select

        while(c <= 10){

            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;

        }
    }

}