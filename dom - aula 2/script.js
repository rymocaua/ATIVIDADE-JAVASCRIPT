const inputElement = document.querySelector('.new-tasks-input')
const addTanksButton = document.querySelector('.nem-task-button')
const taskcontainer = document.querySelector('.task-container')

function ValidarBotao(){
   const texto = document.createElement('p')
   taskcontainer.appendChild(texto)
   texto.innerText = inputElement.value
}

addTanksButton.addEventListener('click',ValidarBotao);