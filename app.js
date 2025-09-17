const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Mostrar mensajes dentro de la página
function mostrarMensaje(texto, tipo = "info") {
  ulResultado.innerHTML = `<li class="${tipo}">${texto}</li>`;
}

// Agregar amigo
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    mostrarMensaje("⚠️ Por favor, escribe un nombre válido.", "error");
    return;
  }
  if (listaAmigos.includes(nombre)) {
    mostrarMensaje("⚠️ Ese nombre ya fue añadido.", "error");
    return;
  }

  listaAmigos.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  ulListaAmigos.appendChild(li);

  inputAmigo.value = "";
  inputAmigo.focus();
}

// Sortear amigo
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    mostrarMensaje("⚠️ Primero añade al menos un amigo.", "error");
    return;
  }

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];

  mostrarMensaje(`🎉 El amigo secreto es: ${amigoSecreto}`, "success");
}

// Reiniciar juego
function reiniciarJuego() {
  listaAmigos.length = 0;
  ulListaAmigos.innerHTML = "";
  ulResultado.innerHTML = "";
  inputAmigo.value = "";
  inputAmigo.focus();
}

