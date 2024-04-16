const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')
const reset = document.getElementById('reset')

//creo las variables

piedra.addEventListener('click', jugar);
papel.addEventListener('click', jugar);
tijera.addEventListener('click', jugar);
reset.addEventListener('click', jugar);

//creo los eventos click para que luego hagan su funcion con jugar


function jugar(event) {
    const opcionUsuario = event.target.id;
    const opcionMaquina = elegirOpcion();
    const resultado = determinarResultado(opcionUsuario, opcionMaquina);


    console.log("Usuario eligio", opcionUsuario);
    console.log("Maquina eligio", opcionMaquina);
    console.log("Resultado", resultado);
}

//creo el evento de jugar para que nos ed un resultado de string



// creo la funcion de opcion para la maquina y el usuario
function elegirOpcion(){
    const opciones = ['piedra', 'papel', 'tijeras'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}

// aca aclaramos las reglas del juego y cuando ganas y cuando perdes

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