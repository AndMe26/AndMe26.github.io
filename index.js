// obtengo los elementos
const texto = document.getElementById("text")

// se le asigna el evento que hara una vez haga click en el texto
texto.addEventListener("click", function() {

    texto.textContent = "Soy un Developer"

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

