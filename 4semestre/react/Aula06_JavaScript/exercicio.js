//Atividade 1 -> Soma Simples

let a = 20;
let b = 30;
let soma = a + b;
console.log(soma); // Saída: 50

//Atividade 2 -> Subtração de Idades

let idade1 = 35;
let idade2 = 27;
let diferenca = idade1 - idade2;
console.log(diferenca); // Saída: 8

//Atividade 3 -> Multiplicação de Preços

let precoUnitario = 23.99;
let quantidade = 3;
let custoTotal = precoUnitario * quantidade;
console.log(custoTotal.toFixed(2)); // Saída: 71.97

//Atividade 4 -> Divisão e Resto

let numerador = 40;
let denominador = 3;
let quociente = Math.floor(numerador / denominador);
let resto = numerador % denominador;
console.log(quociente, resto); // Saída: 13 1

//Atividade 5 -> Área de um Retângulo

let largura = 20;
let altura = 30;
let area = largura * altura;
console.log(area); // Saída: 600

//Atividade 6 -> Conversão de Temperatura

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit); // Saída: 77

//Atividade 7 -> Cálculo de Média

let nota1 = 9.3;
let nota2 = 3.1;
let nota3 = 5.8;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2)); // Saída: 6.06

//Atividade 8 -> Comparação de Números

let num1 = 20;
let num2 = 30;
let maior = num1 > num2 ? num1 : num2;
console.log(maior);

//Atividade 9 -> Calculadora Simples

let num1 = 30;
let num2 = 20;
let soma = num1 + num2;
let subtracao = num1 - num2;
console.log(soma, subtracao);

//Atividade 10 -> Quantidade de Minutos em Horas

let minutos = 680;
let horas = Math.floor(minutos / 60);
let minutosRestantes = minutos % 60;
console.log(horas + ' hrs e ' + minutosRestantes + ' min');
