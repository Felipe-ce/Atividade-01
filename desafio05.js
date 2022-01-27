 // Crie um array que receba 5 itens e exiba no console.
const frutas = ['maçã', 'uva', 'pera', 'melancia', 'tomate']
frutas.forEach((fruta) =>{
  console.log(fruta)
})

// Utilize um método para adicionar um nome ao inicio do array.
frutas.unshift("jambo")
console.log(frutas[0])

// Utilize um método para remover o último nome do array.
frutas.pop()
console.log(frutas[frutas.length - 1])//Pegar o ultimo elmento do array

// Utilize um método para adicionar dois nomes ao fim do array.
frutas.push("acerola", "maracuja")
console.log(frutas[frutas.length - 2], frutas[frutas.length - 1])

// Utilize um método para remover o primeiro nome do array.
frutas.shift("jambo")
console.log(frutas[0])

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())