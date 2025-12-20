/*ALGORITMO DE CANTIDAD DE VENTAS 

UN EMPLEADO DE UNA TIENDA REALIZA N VENTAS DURANTE EL DIA , 
EL GERENTE REQUIERE SABER CUANTAS DE ELLAS FUERON MAYORES A 1000 $,
 CUANTAS FUERON MAYORES A 500 $ PERO MENORES O IGUALES A 1000$ , 
 Y CUANTAS FUERON MENORES O IGUALES  A 500$ , ADEMAS , 
 SE REQUIERE SABER EL MONTO DE LO VENDIDO EN CADA CATEGORIA Y DE FORMA GLOBAL.*/ 


let nVentas= parseInt(prompt("Cuantas ventas realizaste"))

let cantVentas1 = 0;
let cantVentas2 = 0;
let cantVentas3 = 0;

let totalVentas1 = 0;
let totalVentas2 = 0;
let totalVentas3 = 0;

let totalFinal = 0;

for(let cont = 1; cont <= nVentas; cont++){
    let valorVenta = +prompt("Ingrese el monto de la venta");
    if(valorVenta > 1000){
        cantVentas1++
        /*totalVentas1 = totalVentas1 + valorVenta */
        totalVentas1+= valorVenta
    }else if(valorVenta > 500){
        cantVentas2++
        totalVentas2 += valorVenta
    }else{
        cantVentas3++
        totalVentas3 += valorVenta
    }
    totalFinal += valorVenta
}

alert(`Ventas mayor a 1000: \n
    Cantidad: ${cantVentas1} \n
    Total: ${totalVentas1}\n
    -------------------------------
    Ventas mayor a 500 y menores e iguales que 100: \n
    Cantidad: ${cantVentas2} \n
    Total: ${totalVentas2}\n
    -------------------------------
    Ventas menores a 500: \n
    Cantidad: ${cantVentas3} \n
    Total: ${totalVentas3}\n
    -------------------------`);
