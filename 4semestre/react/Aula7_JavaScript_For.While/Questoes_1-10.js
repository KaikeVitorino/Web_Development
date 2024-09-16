//1. Tabuada de 1 a 10:

function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

tabuada(5); // Substitua 5 pelo número que você quiser


//2. Soma dos números de 1 até 100:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(`Soma de 1 a 100: ${soma}`);


//3. Números pares de 0 a 50:

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//4. Fatorial de um número:

function fatorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); // Substitua 5 pelo número que você deseja calcular o fatorial


//5. Sequência de Fibonacci (15 primeiros números):

function fibonacci(quantidade) {
    let fib = [0, 1];
    for (let i = 2; i < quantidade; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.slice(0, quantidade));
}

fibonacci(15);


//6. Contagem de 1 até sua idade:

function contagem(idade) {
    for (let i = 1; i <= idade; i++) {
        console.log(i);
    }
}

contagem(25); // Substitua 25 pela sua idade


//7. Soma dos números pares até 100:

let somaPares = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log(`Soma dos números pares até 100: ${somaPares}`);


//8. Multiplicar por 2 até passar de 1000:

let num = 1;
while (num <= 1000) {
    console.log(num);
    num *= 2;
}


//9. Verificar se um número é primo:

function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrimo(7)); // Substitua 7 pelo número que você quer verificar


//10. Números ímpares de 1 a 20:

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
