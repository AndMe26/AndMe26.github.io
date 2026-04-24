// obtengo los elementos
const texto = document.getElementById("text-dev");
const boton = document.getElementById("btn-extensible");


let mostrarMas = false;

boton.addEventListener("click", function() {

    if (mostrarMas) {
        texto.textContent = "Developer";
        boton.textContent = "+";
        mostrarMas = false;
    } else {
        texto.textContent = "Developer en formacion";
        boton.textContent = "-";
        mostrarMas = true;
    }

});

// obtengo la id bienvenida 
const bienvenida = document.getElementById("welcome");

window.addEventListener("load", function(){

    // muestra el mensaje
    bienvenida.style.top = "70px";

    setTimeout(function() {

        // oculta el mensaje luego de 3 segundos
        bienvenida.style.top = "-100px";},3000);


});


const parrafo = document.getElementById("about-text");
const botonTexto = document.getElementById("btn-text");

let expandido = false;

botonTexto.addEventListener("click", function(){

    if(expandido){
        parrafo.textContent = "Soy un programador apasionado..."
    
        botonTexto.textContent = "Leer mas"

        expandido = false;
    } else {

        parrafo.textContent = "Soy un programador apasionado por crear soluciones digitales eficientes, escalables y centradas en la experiencia del usuario con mi conocimiento tengo unas buenas prácticas de código con un enfoque creativo para resolver problemas reales. siempre estoy al tanto para  adaptárme a nuevas tecnologías y aprendiendo constantemente para mantenerme actualizado. Mi objetivo es construir productos que no solo funcionen bien, sino que también generen impacto y valor para quienes los utilizan."

        botonTexto.textContent = "Leer menos"

        expandido = true;
    }



});

