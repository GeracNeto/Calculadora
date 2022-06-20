//Constante output que pega o id output do HTML
const output = document.getElementById('output');

//Função que insere os valores dos botões na saída da calculadora
function insert(num){
    output.innerHTML = output.innerHTML + num; //Dessa forma a saída semrpe incrementa o valor e não apaga o que ja está escrito
}

//Função que apaga a saída da calculadora
function clean(){
    output.innerHTML = '';
}

function calc(){
    if(output.innerHTML){
        output.innerHTML = eval(output.innerHTML);
    }
}