/// WHILE CONDICION   
/* While ( condicion ) { }     */



/*let i = 0
while (i <= 5) {
  console.log(i)
  // siempre debemos romper
  i++
} */


/* Que nos permita calcular una y otra vez 
   hasta que el usuario decida salir */


  /* while(true)  {
    break;
   }  */


while (true) {
  // MOSTARAR AL USER EL  MENU DE OPCIONES
  const opcion = prompt(
    "Ingresa la opción que deseas escoger:\n1) Calculadora\n2) Salir"
  );

  if (opcion === "1") {
    // SOLICITAR AL USER QUE INGRESE 2 NUMEROS
    const numero1 = Number(prompt("Ingrese el número 1:"));
    const numero2 = Number(prompt("Ingrese el número 2:"));
    const operacion = prompt(
      "Escoja que operación desea realizar\n1) +\n2) -\n3) *\n4) /"
    );

    if (opcion === "+") {
      alert(numero1 + numero2);
    } else if (operacion === "-") {
      alert(numero1 - numero2);
    } else if (operacion === "*") {
      alert(numero1 * numero2);
    } else if (operacion === "/") {
      alert(numero1 / numero2);
    } else {
      alert("Opción inválida");
    }
  } else if (opcion === "2") {
    break;
  } else {
    alert("Opción inválida");
  }
}