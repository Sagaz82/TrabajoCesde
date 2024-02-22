function Menu() {
    console.log("Seleccione operacion:");
    console.log("a. Sumar");
    console.log("b. Restar");
    console.log("c. Multiplicar");
    console.log("d. Dividir");
}

function Opcion(opcion) {
    return opcion == 'a', opcion == 'b', opcion == 'c', opcion == 'd';
}


function calcular(operacion) {
    let n1 = parseFloat(prompt("Ingrese el primer numero:"));
    let n2 = parseFloat(prompt("Ingrese el segundo numero:"));
    let resultado;

    switch (operacion) {
        case 'a':
            resultado = n1 + n2;
            break;
        case 'b':
            resultado = n1 - n2;
            break;
        case 'c':
            resultado = n1 * n2;
            break;
        case 'd':
            resultado = n1 / n2;
            break;
    }

    console.log("El resultado es:", resultado);
}


Menu();
let opcion = prompt("Ingrese la operacion que desea realizar:");


while (!Opcion(opcion)) {
    console.log("Seleccione una opción válida.");
    Menu();
    opcion = prompt("Ingrese la operación que desea realizar:");
}


calcular(opcion);