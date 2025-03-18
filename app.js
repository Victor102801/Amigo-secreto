const amigos = []; // Array para almacenar los nombres de amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar el valor del input
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final
   // Validar que el campo no esté vacío
   if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
}

amigos.push(nombre); // Agregar el nombre al array
input.value = ""; // Limpiar el campo de entrada
actualizarLista(); // Llamar la función para actualizar la lista visual
}

function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos"); // Seleccionar la lista en HTML
    listaElement.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    // Recorrer el array de amigos y crear un <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo como texto
        listaElement.appendChild(li); // Agregar el <li> a la lista
    }
}


