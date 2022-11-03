//tipos de dados 

// Todos são primitivos excetos os objetos.
var nome = "joão" // string 
var idade = 15 // number 
var VerdadeiroOufalso = true // Boolean 
var time; // underfined
var comida = null
var novoObjeto = {} // object


//objetos
const Alunos = {
    NomeDoAluno : "Erick" ,
    IdadeDoAluno : 16 , 
    TimeDoAluno :  false ,   
}

console.log(Alunos.NomeDoAluno)

//Verificar os tipos de dados 
console.log( typeof nome);
console.log(typeof idade);
console.log(typeof VerdadeiroOufalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

// Você pode somar string e assim concatenar as palavras.

var nome2 = "Matheus"
var Sobrenome = "vaz"
var NomeCompleto = nome2 + " " + Sobrenome
console.log(NomeCompleto)

//Você pode somar numeros com strings , o resultado final sera sempre uma string

var gols = 1000;
var frase = 'pelé fez ' + gols +  'gols '
console.log(frase)

// template string

var golacos = 1000;
var frase2 = ` Mstheus Vaz fez mais de ${golacos }`
console.log(frase2);


var nome = "vegeta"
console.log(nome)

var numero = 1080 
console.log ( numero);

var idade = 16 
console.log ( idade);

var nome = "caua"
var sobreNome = "goncalves"


var NomeCompleto = nome + " " + sobreNome
console.log( NomeCompleto)

var frase = "it's time" 
console.log (frase)

var sobrenome = "goncalves "
console.log (typeof sobrenome)

/*var numero = prompt("digite um valor ")
console.log (numero) */

// Faça um programa que peça dois numeros para o usuário. imprima a soma desses dois numeros.

var x= parseInt(prompt ("digite o 1° valor  "))
var y = parseInt(prompt ("digite o 2º valor ") )
var soma = x + y
console.log(soma)


