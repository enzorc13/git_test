const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')
const reset = document.getElementById('reset')

piedra.addEventListener('click', jugar);
papel.addEventListener('click', jugar);
tijera.addEventListener('click', jugar);
reset.addEventListener('click', jugar);


function jugar(event) {
    const opcionUsuario = event.target.id;
    const opcionMaquina = elegirOpcion();
    const resultado = determinarResultado(opcionUsuario, opcionMaquina);


    console.log("Usuario eligio", opcionUsuario);
    console.log("Maquina eligio", opcionMaquina);
    console.log("Resultado", resultado);
}

function elegirOpcion(){
    const opciones = ['piedra', 'papel', 'tijeras'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}


function determinarResultado(opcionUsuario, opcionMaquina) {
    if (opcionUsuario === opcionMaquina) {
        return "Empate";
    } else if (
        (opcionUsuario === "piedra" && opcionMaquina === "tijera") ||
        (opcionUsuario === "papel" && opcionMaquina === "piedra") ||
        (opcionUsuario === "tijera" && opcionMaquina === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}