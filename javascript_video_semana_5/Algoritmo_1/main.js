/* 1  CUANTO AHORRA UNA PERSONA EN UN ANO
se requiere un algoritmo para determinar cuanto ahorrara una persona en un ano,
si al final de cada mes deposita variables cantidades de dinero;ademas,
se requiere sabes cuanto lleva ahorrado cada mes.*/

let ahorro =0;

for (let mes =1; mes <=12;mes++){
    let cant = parseFloat(prompt("Cuanto desea ahorrar este mes"));
    //ahorro = ahorro+cant;
    ahorro += cant;
    alert(`Ud. ahorro en el mes ${mes}, S/ ${ahorro}`);
}

alert(`Ud.ahorro en total ${ahorro}`);
