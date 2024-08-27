function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

document.getElementById("encriptarBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const outputText = encrypt(inputText);
    document.getElementById("outputText").value = outputText;

    const copiarBtn = document.getElementById("copiarBtn");
    if (outputText.trim() !== "") {
        copiarBtn.style.display = "inline-block";
    }
});

document.getElementById("desencriptarBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const outputText = decrypt(inputText);
    document.getElementById("outputText").value = outputText;

    const copiarBtn = document.getElementById("copiarBtn");
    if (outputText.trim() !== "") {
        copiarBtn.style.display = "inline-block";
    }
});

document.getElementById("copiarBtn").addEventListener("click", function() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
});

function ocultarSiHayTexto() {
    const inputText = document.getElementById("inputText").value;
    const imagen = document.getElementById("imagen");
    const mensaje = document.getElementById("mensaje");
    const instrucciones = document.getElementById("instrucciones");

    if (inputText.trim() !== "") {
        imagen.style.display = "none";
        mensaje.style.display = "none";
        instrucciones.style.display = "none";
    }
}

document.getElementById('inputText').addEventListener('input', function() {
    const textarea = this;
    const mensajeError = document.getElementById('mensajeError');
    
    const regex = /^[a-z]*$/;

    if (!regex.test(textarea.value)) {
        mensajeError.textContent = "Por favor, ingresa solo letras minúsculas sin acentos.";
        textarea.value = textarea.value.replace(/[^a-z]/g, '');
    } else {
        mensajeError.textContent = "";
    }
});