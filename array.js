let registrar = [];

registro.prompt("Ingrese su documento:");
registro.prompt("Ingrese su nombre:");
registro.prompt("Ingrese su apellido:");
registro.prompt("Ingrese su correo:");
registro.prompt("Ingrese su salario:");
registro.prompt("Ingrese donde participa:");
registro.prompt("Ingrese el nombre de la institución:");
registro.prompt("¿Está activo? (Sí/No)");

document.write("Datos del Registro");
for (let i = 0; i < registrar.length; i++) {
    
    document.write("<li><strong>" + Dato(i) + ":</strong> " + registrar[i] + "</li>");
}
document.write("</ul>");


function Dato(index) {
    switch (index) {
        case 0:
            return "Documento";
        case 1:
            return "Nombre";
        case 2:
            return "Apellido";
        case 3:
            return "Correo";
        case 4:
            return "Salario";
        case 5:
            return "Programa";
        case 6:
            return "Institución";
        case 7:
            return "¿Está activo?";
        default:
            return "";
    }
}