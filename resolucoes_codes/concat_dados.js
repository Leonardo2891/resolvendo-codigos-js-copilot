// Vamos receber dois dados diferentes do usuário e concatena-los em uma única string?

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o primeiro dado: ', (dado1) => {
    rl.question('Por favor, insira o segundo dado: ', (dado2) => {
        const resultado = dado1 + dado2;
        console.log(`Dados concatenados: ${resultado}`);
        rl.close();
    });
});

// Fim do código
