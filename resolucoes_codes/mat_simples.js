// Vamos solicitar como entrada dois números e depois vamos realizar uma operação simples entre eles.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o primeiro número: ', (num1Str) => {
    rl.question('Por favor, insira o segundo número: ', (num2Str) => {
        const num1 = parseFloat(num1Str);

        const num2 = parseFloat(num2Str);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, insira números válidos.');      

        } else {
            const soma = num1 + num2;
            const subtracao = num1 - num2;
            const multiplicacao = num1 * num2;
            const divisao = num2 !== 0 ? (num1 / num2) : 'Indefinido (divisão por zero)';
            console.log(`Soma: ${soma}`);
            console.log(`Subtração: ${subtracao}`);
            console.log(`Multiplicação: ${multiplicacao}`);
            console.log(`Divisão: ${divisao}`);
        }
        rl.close();
    });
});

// Fim do código