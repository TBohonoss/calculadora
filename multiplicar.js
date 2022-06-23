// Declaração
// 1° Parâmetro = a a ser multiplicado
// 2° Parâmetro = b a ser multiplicado
function multiplicar(a, b){
    if (a === 0 || b === 0){
        return 0;
    } else{
        const resultado = a * b;
// retorna a multiplicação dos dois números    
        return resultado;
    }

}

// Exportação da função multiplicar
module.exports = multiplicar;

