// Personagens
let maça = "url('img/Maca_fuji2.png')";
let kiwis = "url('img/Kiwi.png')";
let melancias = "url(img/Melancia.png)";

// Atribui imagens para escolha do personage
let maçã = document.getElementById('maçã');
let Kiwi = document.getElementById('kiwi');
let melancia = document.getElementById('melancia');

//Background dos Poke
maçã.style.backgroundImage = maça;
Kiwi.style.backgroundImage = kiwis;
melancia.style.backgroundImage = melancias;


function clickMaçã(){

    if (Fruta == '') {
        Fruta = maçã;
    }
}

function clickKiwi(){

    if (Fruta == '') {
        Fruta = Kiwi;
    }

}

function clickMelancia(){

    if (Fruta == '') {
        Fruta = melancia;
    }

}

switch(Fruta) {
    case "maçã":
        alert("Não vendemos esta fruta aqui")
        break;
    
    case "kiwi":
        alert("Estamos com escassez de kiwis")
        break;

    case "melancia":
        alert("Aqui está, são 3 reais o quilo")
        break;
    
    default:
        alert("Desculpe não temos mais opções de frutas")
        break;
}