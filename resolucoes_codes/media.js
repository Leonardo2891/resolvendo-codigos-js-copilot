// Agora vamos calcular a média de três notas fornecidas na entrada do usuário.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira a primeira nota: ', (nota1Str) => {
    rl.question('Por favor, insira a segunda nota: ', (nota2Str) => {
        rl.question('Por favor, insira a terceira nota: ', (nota3Str) => {
            const nota1 = parseFloat(nota1Str);
            const nota2 = parseFloat(nota2Str);
            const nota3 = parseFloat(nota3Str);
            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
                console.log('Por favor, insira notas válidas.');
            } else {
                const media = (nota1 + nota2 + nota3) / 3;
                console.log(`A média das notas é: ${media.toFixed(2)}`);
            }   
            rl.close();
        });        
    });    
});

// Fim do código    