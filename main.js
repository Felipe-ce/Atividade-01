// Crie uma variável que receba um nome;
const aluno = "Felipe"

// Crie uma variável que receba um número;
const idade = 30

// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
const anoAtual = new Date().getFullYear();
console.log(anoAtual)
const anoNascimento = anoAtual - idade

// Agora mostre no console o resultado da soma das duas variáveis guardadas anteriormente;
console.log(anoNascimento)

//Mostre no console a mensagem "Estou mexendo no console.log";
console.log("Estou mechendo no console")

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console;
const diaAtual = new Date().getDay() //Pega o dia atual pelo obijeto Date
if(diaAtual === 3){ //Compara o dia atual e finaliza com uma condição obs: Quarta é o dia 3 pois o indice começa com zero
  console.log(`Sim hoje é quarta feira`)
}else{
  console.log(`Outro dia da semana`)
}

// Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof(diaAtual))
