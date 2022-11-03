//Objetos 


// Conjunto de variáveis e funções, que são chamadas de propriedades e e métodos 


var pessoa = { 
    nome: 'Grazi',
    idade: 20,
    profissao: 'Monitora do professor bonitão',
    MaiorIdade: true,
}

console.log(pessoa)
console.table(pessoa) 

pessoa.nome // puxa informação de apenas um dado citado na variavel 

// Método

// é uma propriedade que possui 


pessoa.nome
console.table(pessoa)

//objetos com funções ou métodos 

    var quadrado = {
        perimetro: function (lado){
            return lado + lado + lado + lado 
        },
         AreaDoQuadrado: function(area){
            return area * area
         }

    }

    // arrays 

    // é um grupo de valores geralmente relacionados . servem para guardarmos diferentes valores em uma unica variavel .

    var videoGames = [ 'PS4 ' , 'Xbox' , 'Switch']

    console.log(videoGames.length)

