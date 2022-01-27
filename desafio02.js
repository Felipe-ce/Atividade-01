//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
const idadeAluno = 18
if(idadeAluno >= 18){
  console.log("Maior de idade")
}else{
  console.log("Menor de idade")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
const humano = true
if(humano == true && idadeAluno >= 18){
  console.log("Habilitado")
}else{
  console.log("Não habilitado")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
const mesAniversario = 'janeiro'
if(mesAniversario == 'janeiro' || mesAniversario == 'dezembro'){
  console.log(`Seu aniversario é em: ${mesAniversario}`)
}else{
  console.log(`Seu aniversario é em outro mês do ano`)
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nomePessoal = "felipe"
if (nomePessoal[0] === "r") {
  console.log("Nome começa com a letra R")
} else {
  console.log("Nome não habilitado")
}


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = 'xavier'
if (sobrenome.length > 6 || nomePessoal[0] === 'e') {
  console.log("Habilitado")
} else {
  console.log("Não habilitado")
}
