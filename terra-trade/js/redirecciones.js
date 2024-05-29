$(document).ready(function(){


    $("#volverpp").click(function(){
        window.location.replace("pagina_principal.html");
    });
    
    $("#volverpi").click(function(){
        window.location.replace("pagina_inicio.html");
    });
});

// Obtener elementos del DOM
var modal = document.getElementById("loginModal");
var btn = document.querySelector(".login-btn button");
var span = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón de login
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la X
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
