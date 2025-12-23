// Vamos testar se uma palavra é um palíndromo?!

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Por favor, insira uma palavra: ', (palavra) => {
    const palavraLimpa = palavra.replace(/[\W_]/g, '').toLowerCase();
    const palavraInvertida = palavraLimpa.split('').reverse().join(''); 
    if (palavraLimpa === palavraInvertida) {
        console.log(`A palavra "${palavra}" é um palíndromo.`);
    } else {
        console.log(`A palavra "${palavra}" não é um palíndromo.`);
    }
    rl.close();
});

// Fim do código