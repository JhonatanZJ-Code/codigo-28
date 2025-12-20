

/*
   PARA GUARDAR LOS DATOS EN EL LOCAL STORAGE 
    let carrito=[
    {
        nombre:"Osito",
        cant:2
    },
    {
        nombre:"Chocolates",
        cant:5
    }
]

let carritoJson = JSON.stringify(carrito)
console.log(carrito,carritoJson);
//setitem sirver para Guardar
localStorage.setItem("Productos",carritoJson);
    
*/



 /*
      EN CASO LO BORRAMOS PODEMOS RECUPAR LOS DATOS 
      PONIENDO LO SIGUIENTE:

 let dataLs = LocalStorage.getItem("productos");

console.Log(dataLS);

let dataConvertida = JSON.parse(dataLS)
console.table(dataConvertida)*/

// SI QUEREMOS BORARLO DEL LOCALSTORE LE PONEMOS UN TIMER

/*
 setTimeout(function(){
    LocalStorage.removeItem("productos");
}, 6000); 

*/

/* SESSION STORAGE

//sessionStorage.setItem("token","qwert12356");

IMAGINATE QUE USAS BANCA POR INTERNET DEL BANCO Y 
TE OLVIDES DE CERRAR LA PESTANA Y TE PROCUPAS DE CERRAR SESION
PARA ESO SIRVER SEssionstorage es temporal



*/

/* let body = document.querySelector("body");

let btn = document.createElement("button");

btn.innerHTML = "click!";

body.appendChild(btn);

btn.addEventListener("click",function(){
    Swal.fire({
        icon:"success",
        title:"Exito!",
        text:"Operacion realizada",

    });
});   */

//CHART JS  


let arr =["kiwi"]["naranja"]["pina"]["fresa"];

let arrData = [50,100,75,35];

let barColors = [

     "#00aba9"
     "#2b5797"
     "#e8c3b9"
     "#1e7145"
];

let lienzo = document.getElementById("lienzo")

const miGrafico = new Chart(lienzo,{
 type: "pie",
 data: { arr, 
	datasets:[{
		backgroundColor: barColores,
		data:}]
}
})