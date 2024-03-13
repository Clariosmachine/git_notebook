function imprimeNome(nome) {
    if(!nome) {
        var nome = 'João Rocha'
    }
    return nome
}

var nome = imprimeNome('Ryan')

console.log(nome)