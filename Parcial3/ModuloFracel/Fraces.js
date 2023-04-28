
let frases = ["El respeto al derecho ajeno es la paz ","No contaban con mi astucia","La tierra es de quien loa trabaja"
,"Un gran poder conlleva una gran responsabilidad","El que madruga dios lo ayuda"];

function obtenerFrase() {
    let indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

modulo.exports.MostrarFrases = obtenerFrase;
console.log(modulo);