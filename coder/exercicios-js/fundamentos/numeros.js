const peso1 = 1.0
const peso2 = Number("2.0");

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao = 9.871
const avaliacao2 = 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//tofixed faz um controle sobre as casas decimais, no caso 2 casas no exemplo
console.log(media.toString(2))//valor da media em binario
console.log(typeof media)
console.log(typeof Number)