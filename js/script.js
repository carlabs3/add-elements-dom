 // Aquí tu código


const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', function () {
    const NuevoElemento = prompt('Añade un nuevo elemento:');
    lista.insertAdjacentHTML ('beforeend', '<li>'+ NuevoElemento + '</li>');
});