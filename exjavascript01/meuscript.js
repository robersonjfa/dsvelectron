alert("Olá JavaScript - Script");

function OlaJavascript() {
    alert("Olá JavaScript - Function");
}


function MostraVariaveis() {
    var nome = "Roberson Alves";
    var numero = 10;
    var dinheiro = 20.90;
    var ativo = true;
    var lista = [];
    var objeto = {};

    // mostrando o tipo de cada variável
    alert(typeof nome);
    alert(typeof numero);
    alert(typeof dinheiro);
    alert(typeof ativo);
    alert(typeof lista);
    alert(typeof objeto);
}


function Calcular() {
    var num1 = parsetFloat(document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var ops = document.getElementsByName("operacao");
    var resultado = 0;
   
    var op;
    ops.forEach(function (o) {
        if (o.checked)  
            op = o.value;
    });
    
    switch (op) {
        case "+": resultado = num1 + 
            num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num1 / num2; break;
    }

    alert("Resultado: " + resultado);    
}
