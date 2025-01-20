// Alterar o conteúdo da tag h1:
document.querySelector('h1').textContent = 'Hora do Desafio';
// Exibir mensagem no console quando o botão "Console" for pressionado:
function exibirMensagemNoConsole() {
    console.log('Botão pressionado');
}
// Exibir mensagem de alerta sempre que o botão "Alerta" for pressionado:
function exibirMensagemDeAlerta() {
    alert('Eu amo JS!');
}
// Perguntar o nome de uma cidade do Brasil e exibir um alerta com a resposta:
function perguntarNomeCidade() {
    let nomeCidade = prompt('Qual é o nome de uma cidade do Brasil?');
    alert('Estive em ' + nomeCidade + ' e lembrei de você!');
}
// Pedir dois números inteiros e exibir o resultado da soma em um alerta:
function somarNumeros() {
    let numero1 = parseInt(prompt('Digite um número inteiro:'));
    let numero2 = parseInt(prompt('Digite outro número inteiro:'));
    alert('A soma dos números é ' + (numero1 + numero2));
}