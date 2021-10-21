
function tabelaMult(n) { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // todo: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let arrayTabela = [];

    for (let contador = 0; contador <= n; contador++) {
        arrayTabela [contador] = [contador * n];
        for (let subContador = 0; subContador<= n; subContador++){
        arrayTabela [contador] [subContador] = [subContador * contador];
        }
    }
    return arrayTabela;
}

console.table(tabelaMult(9))