//Variables GLOBALES
var LETRAS = [] // Contiene las letras que deben ser adivinadas ej: ["J","I","R","A","F","A"]
var LETRASadiv = [] // Contiene las letras adivinadas hasta el momento ej: ["J","__","__","A","__","A"]
var WORDS = ['CONTENIDO', 'JOYA', 'DETONADOR', 'INCESANTE', 'NIÑO', 'REPTIL', 'DESORIENTACIÓN', 'OMNÍVORO', 'MENTAL', 'ASEQUIBLE', 'GUERRERO', 'MODA', 'DESLEAL', 'INMUNDICIA', 'RESCATE', 'CIFRADO', 'BENEVOLENTE', 'PIE', 'DEFORME', 'MANDO', 'GRANERO', 'ABSTINENTE', 'CÉNTRICO', 'AMABLE', 'ORUGA', 'PÉLVICO', 'DESMEMBRAMIENTO', 'SERENIDAD', 'DESAGÜE', 'JOROBADO', 'ERÓTICA', 'FEDERAL', 'PADRE', 'CHILLÓN', 'INÚTIL', 'GHETTO', 'CERO', 'PERRO', 'TANQUE', 'PICNIC', 'SOÑOLIENTO', 'ENCANTADOR', 'MALEFICIO', 'HABLAR', 'BALLET', 'SUBSÓNICO', 'HIENA', 'CARICIA', 'DIRIGIBLE', 'ELEVACIÓN', 'CARACOL', 'HAZME', 'HIPOPÓTAMO', 'DIABÓLICO', 'EVIDENCIA', 'LUJURIA', 'FANTÁSTICO', 'CABALLERO', 'DIFUMINAR', 'BURRO', 'CASA', 'CLUB', 'VERDAD', 'PODER', 'GENTE', 'ATRAPAMOSCAS', 'OESTE', 'JARDINES', 'RELUCIENTE', 'ATRAPAMOSCAS', 'SÚPER', 'POESÍA', 'IMÁN', 'CORTO', 'MESTIZO', 'ACTITUD', 'BOLSO', 'ADIVINAR', 'LEVANTAMIENTO', 'PROFÉTICO', 'SANITARIO', 'DEMONIO', 'NECRÓFAGO', 'DESINTEGRACIÓN', 'CHIFLADO', 'VAGABUNDO', 'GOBERNADOR', 'ENTRADA', 'ANIMALISTA', 'PERFORAR', 'ESPALDA', 'PROVEEDOR', 'ENREDADERA', 'CHANTAJE', 'MINIPÍLDORA', 'AGRESOR', 'FUERZA', 'POSITIVO', 'EXTRAVAGANTE', 'MÁXIMO', 'DRAMÁTICO', 'PROYECTO', 'CREADOR', 'ESPOSA']
var WORD = ""
var INTENTOS = 5

const init = function() {
    WORD = WORDS[Math.floor(Math.random() * WORDS.length)]
    for (let i = 0; i < WORD.length; i++) {
        LETRAS.push(WORD[i])
        LETRASadiv.push('___')
    }
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    document.getElementById("intentos-restantes").textContent = INTENTOS
}

const findReplaceLetter = function(letter) {
    isInWord = false
    for (let i = 0; i < LETRAS.length; i++) {
        if (LETRAS[i] === letter) {
            LETRASadiv[i] = letter;
            isInWord = true
        }
    }
    if (!isInWord) {
        INTENTOS = INTENTOS - 1
        console.log(INTENTOS)
        document.getElementById("intentos-restantes").textContent = INTENTOS
    }
}

const pulsarBoton = function() {
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    var x = this.textContent
    findReplaceLetter(x)
    document.getElementById("estado-palabra").textContent = LETRASadiv.join(" ")
    this.style.backgroundColor = "gray";
}

const RecargarPagina = function() {
        location.reload()
    }
    // Agregamos funcion a llas teclas
const botones = document.querySelectorAll(".tecla");
// Recorremos el array botones
botones.forEach(boton => {
    boton.addEventListener("click", pulsarBoton)
})
const botonNuevoJuego = document.querySelector("#nuevo-juego");
botonNuevoJuego.addEventListener("click", RecargarPagina)

init()
console.log(WORD)