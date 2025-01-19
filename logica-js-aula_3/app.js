// Exibir uma mensagem de boas-vindas:
console.log("Bem-vindo!");
// Exibir uma mensagem de boas-vindas com seu nome:
let nome = "Rafael";
console.log(`Olá, ${nome}!`);
//Exibir uma mensagem de boas-vindas com alert:
alert(`Olá, ${nome}!`);
// Perguntar sobre a linguagem de programação favorita:
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Você gosta de ${linguagemFavorita}!`);
// Soma de dois valores:
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
// Subtração de dois valores:
let valor3 = 15;
let valor4 = 10;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);
// Verificar se o usuário é maior ou menor de idade:
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
// Verificar se um número é positivo, negativo ou zero:
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
// Loop while para imprimir números de 1 a 10:
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Verificar se a nota é maior ou igual a 7:
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
// Gerar um número aleatório:
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
// Gerar um número inteiro aleatório entre 1 e 10:
let numeroInteiro1a10 = Math.floor(Math.random() * 10) + 1;
console.log(numeroInteiro1a10);
// Gerar um número inteiro aleatório entre 1 e 1000:
let numeroInteiro1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroInteiro1a1000);
// Final dos exercícios da aula 3.