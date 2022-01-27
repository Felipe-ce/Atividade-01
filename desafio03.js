//1 - Criar um loop que conte de 1 até 10 usando FOR
for(let i = 1; i <= 10; i++){
  console.log(`A fila esta em: ${i}`)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
for(let i = 10; i >= 1; i--){
  console.log(`A fila esta em: ${i}`)
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(`O numero: ${i} é impar`)
  }
}

//4- Criar um loop que conte todos os números pares de 0 a 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`O numero: ${i} é par`)
  }
}