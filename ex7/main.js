/*
Crie uma página que receba N valores do usuário, 
armazene esses valores em um vetor. 
Crie botões para mostrar todos os valores inseridos, 
o maior valor e o menor valor do vetor.
*/

function init() {
    var a = document.getElementById("input").value.split(', ');
    a.forEach(e => {
        e = parseInt(e);
    });
    return a;
}


function todos() {
    var a = init()
    document.getElementById("p").innerHTML = a;
}

function maior() {
    var a = init()
    var x = Number.MIN_SAFE_INTEGER;
    a.forEach(e => {
        if(parseInt(e) > x) {
            x = e;
        }
    });
    document.getElementById("p").innerHTML = x;
}

function menor() {
    var a = init()
    var x = Number.MAX_SAFE_INTEGER;
    a.forEach(e => {
        if(parseInt(e) < x) {
            x = e;
        }
    });
    document.getElementById("p").innerHTML = x;
}