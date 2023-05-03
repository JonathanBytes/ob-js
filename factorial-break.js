// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 
let input = 10
let solution = 1
let i = 1

while (true) {
  solution = solution * i
  i++
  if (input < i) {
    break
  }
}

console.log(input + "! = " + solution)
