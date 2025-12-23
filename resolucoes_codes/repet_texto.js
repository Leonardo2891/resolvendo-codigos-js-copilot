// Agora vamos solicitar uma string e um número inteiro como entrada. Depois teremos que retornar a string repetida o número de vezes informado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira uma string: ', (texto) => {
    rl.question('Por favor, insira um número inteiro: ', (numeroStr) => {
        const numero = parseInt(numeroStr);
        if (isNaN(numero) || numero < 0) {
            console.log('Por favor, insira um número inteiro válido.');
        } else {
            const resultado = (texto + ' ').repeat(numero).trim();
            console.log(`Texto repetido: ${resultado}`);
        }
        rl.close();
    });
});


// Fim do código
