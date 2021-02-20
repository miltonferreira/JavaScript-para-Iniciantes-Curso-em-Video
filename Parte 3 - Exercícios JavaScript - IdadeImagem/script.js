 function verficar(){

    var ano = new Date().getFullYear();
    var fano = document.querySelector("#txtano");
    var res = document.querySelector("#res");

    if(fano.value.length == 0 || fano.value > ano){

        alert("Verifique o ano e tente novamente!");

    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);

        //photoCreate();
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var genero = '';
        if(fsex[0].checked){

            genero = 'Homem';

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menino.png');
            } else if(idade < 21){
                // jovem
                img.setAttribute('src', 'img/homemJovem.png');
            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'img/homemAdulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'img/homemVelho.png');
            }

        } else if(fsex[1].checked){

            genero = 'Mulher';

            if(idade >= 0 && idade < 10){
                //criança
                //img.setAttribute('src', 'img/menina.png');
                img = image(img, 'menina');
            } else if(idade < 21){
                // jovem
                img.setAttribute('src', 'img/mulherJovem.png');
            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'img/mulherAdulta.png');
            } else {
                // Idoso
                img.setAttribute('src', 'img/mulherVelha.png');
            }

        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);

    }

 }

 function photoCreate(){

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

 }

 function image(img, name){
    return img.setAttribute('src', 'img/'+name+'.png');
 }