// Crie um objeto que receba ao menos três propriedades sobre você.
const pessoa = {
  nome: "Felipe",
  idade: 30,
  altura: 1.70
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoa.sobrenome = "Xavier"

// Remova uma propriedade desse objeto.
delete pessoa.altura

//Mostre no console todas as propriedades desse objeto.
console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
const cadastro = [
  {
    nome: 'Felipe',
    idade: 30,
    telefone: 987555883,
    amigos: [
      "homem de ferro"
    ]
  },
  {
    nome: 'Homem de ferro',
    idade: 40,
    telefone: 99999999,
    amigos: [
      "homem aranha"
    ]
  },
  {
    nome: 'Hulk',
    idade: 40,
    telefone: 11111111,
    amigos: [
      "homem de ferro"
    ]
  },
  {
    nome: 'Thor',
    idade: 35,
    telefone: 22222222,
    amigos: [
      "Hulk"
    ]
  },
  {
    nome: 'Homem formiga',
    idade: 28,
    telefone: 44444444,
    amigos: [
      "Thor"
    ]
  },
]


//Na propriedade amigos, adicione ao menos 4 itens.
cadastro[0].amigos.push("homem aranha", "hulk", "homem formiga", 'thor')

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])
