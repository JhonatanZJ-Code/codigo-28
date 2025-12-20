// comentario de 1 linea

/*esto es para comentarios mas largos*/
// var : el prefijo
// direccion: nombre de la variable
//  = : operador de asignacion
// "av mi casa 123" : valor de la variable en este caso " string"  que es de texto


var direccion = "av mi casa 123"
var direccion = "av siempre viva"
// imprimir algo en consola
console.log("hola mundo")
console.log(direccion)


//ahora con let 

let edad = 50    // number
edad = 51

console.log(edad)

// inmutables

const ipFija = "192.123.432.123"
const dni = "9999999"

// ipFija= "192.168.1.1"     esto seria un error porque const no se peude cambiar 


let dirrecionDeCasa = " "   /* la forma correcta de escribir varibales de nombre largo es asi */

let direccion_de_casa = " "  /*esta es otra pero menos formal pero valida. */


//Operador Aritmetricos//

// + - * /  

let suma = 0
let resta = 0
let division = 0
let producto = 0

const numero1 = 10
const numero2 = 20
suma = numero1 + numero2
console.log("La suma es", suma)

resta = numero1 - numero2
division = numero1 / numero2
producto = numero1 * numero2

console.log("La resta es:", resta)
console.log("La division es:", division)
console.log("El producto es:", producto)


//Operadores de COMPARACION
// SIEMPRE LOS OPERADORES DE COMPARACION RETORNAN UN BOOLEAN ( TRUE - FALSE)

const mayor = 10 > 5
console.log("mayor", mayor)

const menor = 5 < 10
console.log("menor", menor)

console.log("mayor igual", 10 >= 10)

console.log("menor igual", 3 <= 3)

// IGUALDAD 

console.log("2" == 2)   // con doble == solo compara el valor mas no el tipo de dato

console.log("2" === 2) // el triple = si diferencia entre valores

console.log("hola" === "HOLA") // al poner triple operador de asignacion  siempre notara la diferencia

console.log(true + true)


// CONDICIONES 
// !==   esto significa diferente

// if  =  Si ?(de pregunta)
// else =  Si no (condicion)
// {} = dentro de las llaves uno puede poner cualquier cantidad de codigo


if (division !== 0) {
  division = numero1 / numero2
  console.log("La division es", division)
} else {
  console.log("El numero2 debe ser diferente a 0")
}

