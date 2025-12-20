

/// 18 objetos globales y metodos//


/* PRIMITIVOS 

-String
-Number
-Boolean
-Undefined
-Null
-Symbol
-Bigint


 OBJETOS

- Todo lo demas.
- Como los arreglos..
- Y las funciones tambien.  */


/*Ejemplos

let nombre = "hugo sanchez";

console.log(nombre.length);

// hacer que sea en mayusculas
console.log(nombre.toUpperCase());

//hacer que sea en minusculas
console.log(nombre.toLowerCase());

let nombreSplit= nombre.split(" ");
console.log(nombreSplit);

//*Objeto Math

console.log(Math.E);

console.log(Math.PI);
// da un valor random entre 0 y 1 
console.log(Math.random());


//redondear numeros
// ejemplo 11
console.log(Math.round(10.5));

// ejemplo 10
console.log(Math.round(10.3));
// math.ceil redondea al valor maximo
console.log(Math.ceil(7.1));
// math.floor por mas que sea el valor siempre rendodea al mismo valor
console.log(Math.floor(5.999));
 */

// objeto de fechas 
let hoy =new Date();

console.log(hoy);

//Dia

console.log(hoy.getDate());
//Mes  maneja 0 como Enero y 11  como Diciembre

console.log(hoy.getMonth());

//Anio
console.log(hoy.getFullYear());
// Timestamp - Medianoche del 01 de Enero de 1970

console.log(hoy.getTime());


/* date-fns.org Para ver hora exact*/


// metodos de arreglos

let arr=[
    "kiwi",
    "Naranja",
    "Manzana",
    "Pina",
    "Uva"];

    console.log(arr.length);

   /* arr.forEach(function(item,indice){
        console.log('${indice} - ${item}');
    }); */

    /* let arrConvertido = arr.map(function(item,indice){
            return `<p data-id="${indice}">${item}</p>`;
    });

    console.log(arrConvertido.join());   */

    let filtrado=arr.filter(function(item,indice){
        return item.length < 5
    });
    
    console.log(filtrado);


    /*PARA SABER MAS SOBRE OBJETOS GLOBALES VISITAR LINK :

    https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects

    https://www.w3schools.com/jsref/jsref_obj_array.asp  */



    