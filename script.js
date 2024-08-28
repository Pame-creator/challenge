const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


/* Tipo de Encriptación
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//Botón para encriptar el texto
function bEncript(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    //mensaje.computedStyleMap.background = "none";
	
	if (mensaje.value.trim() != "") {
        mensaje.style.backgroundImage = "none";   
    } else {
        mensaje.style.backgroundImage = 'url("./img/cat.png")'
    }

}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0]))  {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])


        }
    }
    return stringEncriptada
}
//Botón para desencriptar el texto
function bDesencript(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
	
	if (mensaje.value.trim() != "") {
        mensaje.style.backgroundImage = "none";   
    } else {
        mensaje.style.backgroundImage = 'url("./img/cat.png")';
    }
    
}
    
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1]))  {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function limpiarCaja() {
    document.querySelector().value = '';
}
//Botón para copiar 
function copiarContenido() {
    var textarea = document.getElementById('textToCopy');
    
    
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    
    
    navigator.clipboard.writeText(textarea.value)
    .then(() => {
        mostrarAlerta('Texto copiado exitosamente!');
    })
    .catch(err => {
        mostrarAlerta('Ocurrió un error al copiar el texto.');
        console.error('Error al copiar al portapapeles: ', err);
    });
}

    
// Permite solo letras minúsculas y espacios sin acentos

function validarTexto(input) {
    EnableDisable(input);
    let regex = /^[a-z\s]*$/;
    
    if (!regex.test(input.value)) {
        input.value = input.value.slice(0, -1);
        alert("Solo se permiten letras minúsculas y sin acentos.");
    }
    
}

function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('alerta');
    const mensajeAlerta = document.getElementById('mensaje-alerta');
    mensajeAlerta.textContent = mensaje;
    alerta.style.visibility = 'visible';
}

function cerrarAlerta() {
    document.getElementById('alerta').style.visibility = 'hidden';
}


function EnableDisable(input) {
    var btnCopiar = document.getElementById("copiar");
    ("EnableDisable ejecutado, valor de input:", input.value);

    if (input.value.trim() != "") {
        btnCopiar.style.display = "block";
        ("Botón copiar visible");
    } else {
        btnCopiar.style.display = "none";
        ("Botón copiar oculto");
    }
}