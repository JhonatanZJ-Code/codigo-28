// alert ("Todo Funciona") 

// Buscar elementos del HTML en JS

// document.getElementById("id")
// buena practica, es guardar la busqueda en una variable

const tituloPrincipal = document.getElementById("titulo-principal");

console.log(tituloPrincipal);

// textContent  - Es la propiedad que nos permite modificar el texto de uan etiqueta
tituloPrincipal.textContent = "Codigo G28"

// modificar titulos
// javascript tiene la capacidad pero NO es recomendable
// porque para cambiar de estilos 
// tiene en si mucho procesamiento de informacion
// EJEMPLO:  tituloPrincipal.style.color = "#f01";
// si quisieramos modificar un estilo, lo recomdable es crear un CSS 
// una clase y agregarle esa clase desde JS.

// classList.add: sirve para agregar una clase a una etiqueta
// classList.remove: sirve para eliminar una clase.
tituloPrincipal.classList.add("css-titulo-principal");

//document.querySelector:  retorna 1 elemento o busca 1 elemento

// document.querySelectorAll: busca todas las coincidencias


// nombre de etiqueta

const parrafo = document.querySelector("p");
parrafo.addEventListener("click", function () {
  alert("Click en cualquier elemento");
});

const parrafos = document.querySelectorAll("p");

console.log(parrafo);

console.log(parrafos);



const btnOne = document.querySelector(".btn-one")     

//  document.querySelector(".btn-one")    
// Siempre va entre admiracion.
// # para selecion por id 
// [] para seleccion de  atributos 


console.log(btnOne); 
// como podemos capturar el click de un boton y hacer una accion
/**
    - addEventListener
    - parametro1: evento "click"
    - parametro2: function (la funcion no tiene nombre - funcion anonima)

 */

btnOne.addEventListener("click", function () {
  const segundoParrafo = document.querySelector("#segundo-parrafo");
  segundoParrafo.textContent = "Este es un parrafo, que se modifico desde JS";
});

// DATO EXTRA MUY IMPORTANTE
// TODOS los elementos tiene el atributo click
const contenedor=document.querySelector("#contenedor")

contenedor.innerHTML = `
<h2> Titulo de JS </h2>
<img width="200" src="https://s.yimg.com/ny/api/res/1.2/NaOTgdvY13YTdArSZfoAkg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://media.zenfs.com/es/lanacion.com.ar/b58d7d879d2f5b745b886c136f23302c" />
<div>
<p>Hola Mundo</p>
</div>
`;

// es posible manipular las etiquetas creadas usando el innerHTML
// const titulo2 = document.querySelector("#titulo-2")
// titulo2.classList.add("css-titulo-principal")

