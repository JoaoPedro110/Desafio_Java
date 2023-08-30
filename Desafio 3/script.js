let contador = 1;
let numero = parseInt(prompt("Digite um numero"));
let msg = "Contagem";

if (isNaN(numero) || numero <= 0) {
    alert("Numero digitado invalido");
} else {
    while (contador <= numero){
        msg = msg + '  ' + contador;
        contador++;
    }
    msg = msg + ' Acabou!';
    alert(msg);
}



