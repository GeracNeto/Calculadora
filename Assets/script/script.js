const output = document.getElementById('output'); //Constante output que pega o id output do HTML

var array = [];

//Função que insere os valores dos botões na saída da calculadora
function insert(num){
    output.innerHTML = output.innerHTML + num; //Dessa forma a saída semrpe incrementa o valor e não apaga o que ja está escrito
    
    //Adiciona todos os valores acionados para o array. Servirá para verificar se haverá repetição dos operadores aritméticos
    array.push(num);
    console.log(array);

    //Armazena nas variáveis abaixo o ultimo valor e o penultimo valor do array. Servirá para verificar se haverá repetição dos operadores aritméticos
    var lastArrayValue = array[array.length-1];
    var penultArrayValue = array[array.length-2];

    //Essa condição verifica se os ultimos valores inseridos são operadoress. Exemplo: ++ ou +-, *+ e etc.
    if(lastArrayValue === '+' || lastArrayValue === '-' || lastArrayValue === '*' || lastArrayValue === '/' || lastArrayValue === '.'){
        if(penultArrayValue === '+' || penultArrayValue === '-' || penultArrayValue === '*' || penultArrayValue === '/' || penultArrayValue === '.'){
            console.log('Sequência de operadores, o que vale é o ultimo digitado');

            /*Aqui o código pega o ultimo caracter da string da saída da calculadora e altera ele para o ultimo operador digitado
            Dessa forma, se o usuário digitar por exemplo: 8+- o código tranforma isso para 8-, sempre mantendo o utimo operador digitado
            Também vale para o ponto, exemplo: 8.., ele mantém apenas um ponto -> 8.
            */
            var text = output.innerHTML;

            var substring = text.substring(0, text.length -2); //Apaga o ultimo caracter da string

            var replaced = substring + lastArrayValue; //Pega o restante da string e soma com o ultimo valor do array

            output.innerHTML = replaced; //Atualiza a saída da calculadora com a correção
        }
    }
}

//Função que apaga a saída da calculadora
function clean(){
    output.innerHTML = '';
    array = [];
    console.log('Saída limpa')
}

//Função para calcular o resultado caso exista dados na saída
function calc(){
    if(output.innerHTML){
        output.innerHTML = eval(output.innerHTML);
        console.log('Efetuada operação')
    }
}