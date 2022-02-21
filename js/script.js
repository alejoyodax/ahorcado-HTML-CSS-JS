//Variables GLOBALES
var LETRAS = [], // Contiene las letras que deben ser adivinadas ej: ["J","I","R","A","F","A"]
    LETRASadiv = [], // Contiene las letras adivinadas hasta el momento ej: ["J","__","__","A","__","A"]
    WORDS = ['CONTENIDO', 'JOYA', 'DETONADOR', 'INCESANTE', 'NIÑO', 'REPTIL', 'DESORIENTACIÓN', 'OMNÍVORO', 'MENTAL', 'ASEQUIBLE', 'GUERRERO', 'MODA', 'DESLEAL', 'INMUNDICIA', 'RESCATE', 'CIFRADO', 'BENEVOLENTE', 'PIE', 'DEFORME', 'MANDO', 'GRANERO', 'ABSTINENTE', 'CÉNTRICO', 'AMABLE', 'ORUGA', 'PÉLVICO', 'DESMEMBRAMIENTO', 'SERENIDAD', 'DESAGÜE', 'JOROBADO', 'ERÓTICA', 'FEDERAL', 'PADRE', 'CHILLÓN', 'INÚTIL', 'GHETTO', 'CERO', 'PERRO', 'TANQUE', 'PICNIC', 'SOÑOLIENTO', 'ENCANTADOR', 'MALEFICIO', 'HABLAR', 'BALLET', 'SUBSÓNICO', 'HIENA', 'CARICIA', 'DIRIGIBLE', 'ELEVACIÓN', 'CARACOL', 'HAZME', 'HIPOPÓTAMO', 'DIABÓLICO', 'EVIDENCIA', 'LUJURIA', 'FANTÁSTICO', 'CABALLERO', 'DIFUMINAR', 'BURRO', 'CASA', 'CLUB', 'VERDAD', 'PODER', 'GENTE', 'ATRAPAMOSCAS', 'OESTE', 'JARDINES', 'RELUCIENTE', 'ATRAPAMOSCAS', 'SÚPER', 'POESÍA', 'IMÁN', 'CORTO', 'MESTIZO', 'ACTITUD', 'BOLSO', 'ADIVINAR', 'LEVANTAMIENTO', 'PROFÉTICO', 'SANITARIO', 'DEMONIO', 'NECRÓFAGO', 'DESINTEGRACIÓN', 'CHIFLADO', 'VAGABUNDO', 'GOBERNADOR', 'ENTRADA', 'ANIMALISTA', 'PERFORAR', 'ESPALDA', 'PROVEEDOR', 'ENREDADERA', 'CHANTAJE', 'MINIPÍLDORA', 'AGRESOR', 'FUERZA', 'POSITIVO', 'EXTRAVAGANTE', 'MÁXIMO', 'DRAMÁTICO', 'PROYECTO', 'CREADOR', 'ESPOSA'],
    WORD = "",
    intentosRestantes = 5

const init = function () {
    // selecciona una palabra al azar del array WORDS
    WORD = WORDS[Math.floor(Math.random() * WORDS.length)]
    // llenamos los dos array previamente declarados para contener la letras
    for (let i = 0; i < WORD.length; i++) {
        LETRAS.push(WORD[i])
        LETRASadiv.push('__')
    }
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    document.getElementById("intentos-restantes").textContent = intentosRestantes
}

const verificarLetra = function (letra) {
    function sinTilde(letra) {
        switch (letra) {
            case "Á":
                return 'A'
            case "É":
                return "E"
            case "Í":
                return "I"
            case "Ó":
                return "O"
            case "Ú":
                return "U"
        }
        return letra
    }


    siApareceEnPalabra = false
    let longitud = LETRAS.length
    for (let i = 0; i < longitud; i++) {
        if (sinTilde(LETRAS[i]) === letra) {
            // si la letra se encuentra en la palabra
            LETRASadiv[i] = LETRAS[i];
            siApareceEnPalabra = true;
        }
    }

    if (!siApareceEnPalabra) {
        intentosRestantes -= 1
        console.log(intentosRestantes)
        document.getElementById("intentos-restantes").textContent = intentosRestantes
    }
}

const pulsarBoton = function () {
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    var x = this.textContent
    verificarLetra(x)
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    this.style.backgroundColor = "gray";
    this.state = 0;


}

const RecargarPagina = function () {
    location.reload()
}
// Agregamos funcion a las teclas
const botones = document.querySelectorAll(".tecla");
// Recorremos el array botones
botones.forEach(boton => {
    boton.addEventListener("click", pulsarBoton)
})
const botonNuevoJuego = document.querySelector("#nuevo-juego");
botonNuevoJuego.addEventListener("click", RecargarPagina)

init()
console.log(WORD)