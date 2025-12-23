// Como entrada, receba um número inteiro e verifique se ele é par ou ímpar.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira um número inteiro: ', (numeroStr) => {
    const numero = parseInt(numeroStr);
    if (isNaN(numero)) {
        console.log('Por favor, insira um número inteiro válido.');
    } else {        
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é par.`);
        } else {
            console.log(`O número ${numero} é ímpar.`);
        }   
    }
    rl.close();
});

// Fim do código