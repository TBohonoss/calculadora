// Declaração
// 1° Parâmetro = a a ser dividido
// 2° Parâmetro = b a ser dividido
function dividir(a, b){
    if (a === 0 || b === 0){
        return "Não se pode dividir por zero";
    } else{
        const resultado = a / b;
// retorna a multiplicação dos dois números    
        return resultado;
    }

}

// Exportação da função multiplicar
module.exports = dividir;