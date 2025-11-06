 // Aquí tu código


const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', function () {
    const NuevoElemento = prompt('Añade un nuevo elemento:');
    lista.insertAdjacentHTML ('beforeend', '<li>'+ NuevoElemento + '</li>');
});

/* CORRECCIÓN CLASE:
- Después del prompt, el siguiente paso debería ir dentro de un if (NuevoElemento)
  para evitar añadir un producto vacío si el prompt está vacío.
- También se puede usar un método alternativo más seguro:

    const li = document.createElement("li");
    li.textContent = NuevoElemento;
    lista.appendChild(li);

*/
