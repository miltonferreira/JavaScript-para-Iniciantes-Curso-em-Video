function carregar(){
    var msg = document.querySelector("#msg");
    var img = document.querySelector("#image");
    var hora = new Date().getHours();

    // hora = 20;
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        // Bom Dia
        img.src = 'img/manha.png';
        document.body.style.background = '#e2cd9f';

    } else if(hora >= 12 && hora <= 18){
        // Boa Tarde
        img.src = 'img/tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        // Boa noite
        img.src = 'img/noite.png';
        document.body.style.background = '#515154';
    }

}

carregar();