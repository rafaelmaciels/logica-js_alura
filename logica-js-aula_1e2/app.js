// Contador que começa em 1 e vai até 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
};

// Contador que começa em 10 e vai até 0:
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
};

//Programa de contagem regressiva:
let numRegressivo = prompt("Digite um número para a contagem regressiva:");
numRegressivo = parseInt(numRegressivo);

while (numRegressivo >= 0) {
  console.log(numRegressivo);
  numRegressivo--;
};

// Programa de contagem progressiva:
let numProgressivo = prompt("Digite um número para a contagem progressiva:");
numProgressivo = parseInt(numProgressivo);
let k = 0;

while (k <= numProgressivo) {
  console.log(k);
  k++;
}





