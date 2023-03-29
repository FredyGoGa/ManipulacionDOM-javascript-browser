// Obtener elementos del DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const section = document.querySelector("section");
const text = document.getElementById("text");
const email = document.getElementById("email");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function saveName() {
  var nombreDigitado = document.getElementById("name").value;
  localStorage.setItem("name", nombreDigitado);
  var emailDigitado = document.getElementById("email").value;
  localStorage.setItem("email", emailDigitado);
  alert("usuario guardado correctamente");

  showName();
}

// Función para mostrar el nombre guardado en localStorage
function showName() {
  var nombreGuardado = localStorage.getItem("name");
  var emailGuardado = localStorage.getItem("email");
  if (nombreGuardado) {
    text.innerHTML = `Usuario guardado: ${nombreGuardado} - ${emailGuardado}`;
  } else {
    text.innerHTML = "No hay datos guardados.";
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  showName();
}
showName();
