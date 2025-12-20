/**
 Ejercicio 1: Par o Impar
 Crear una variable con un numero y mostrar en consola si es par o impar.
 */

 // La funcion prompt   muestra una alerta donde podemos escribir

 const numero = Number (prompt("Ingrese un Numero"));
// los prompt siempre retornan string
// validar si el numero es par
// para poder hallar el residuo usamos el operador  "%"  
const residuo = numero % 2;
if (residuo===0) {
    console.log("El numero", numero, "es par");
}  else {
    console.log("El numero", numero,"es impar")
}
