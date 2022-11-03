const Nome = document.querySelector('#NOME') 
const Altura = document.querySelector('#ALTURA')
const Peso = document.querySelector('#PESO')
const Calcular = document.querySelector('#CALCULAR')
const Resultado = document.querySelector('#resultado')

function imc(){
   if(Nome.value !== ''){
    const valorIMC = (Peso.value/(Altura.value**2)).toFixed(1
        )

    if(valorIMC <= 18 ){
        
        Resultado.textContent = `${Nome.value}, você possui ${valorIMC} de imc , você esta abaixo do peso`

    }else if (valorIMC > 18 && valorIMC <= 25){
        Resultado.textContent = `${Nome.value}, você possui ${valorIMC} de imc , você esta abaixo do peso`
    }else{
        Resultado.textContent = `${Nome.value}, você possui ${valorIMC} de imc , você esta acima do peso`
    
    } 

    

   } else{
    alert('preencha o campo vazio!')
   }
}

Calcular.addEventListener('click' , imc)
