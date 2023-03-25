const input = document.getElementById("palabra");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const palabra = input.value.toLowerCase();
  const palabraReversa = palabra.split("").reverse().join("");

  if (palabra === palabraReversa) {
    resultado.textContent = `La palabra "${palabra}" es palíndroma.`;
  } else {
    resultado.textContent = `La palabra "${palabra}" no es palíndroma.`;
  }
});
