let Fruta

Fruta = prompt("Qual Fruta você deseja?")

switch(Fruta.toLowerCase()) {
    case "maça":
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