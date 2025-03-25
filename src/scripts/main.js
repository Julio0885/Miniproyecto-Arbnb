/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays} from './stays.js'

// Seleccionamos los elementos del DOM que vamos a necesitar
const logo = document.querySelector('#logo');
const searchContainer = document.querySelector('#searchContainer');
const addLocationInput = document.querySelector('#addLocationInput');
const addGuestsInput = document.querySelector('#addGuestsInput');
const searchButton = document.querySelector('#searchButton');
const ocultarsearch = document.querySelector('#ocultar-logo');
const lugaresContainer = document.querySelector('#citiesContainer');
const botoncerrar = document.querySelector('#botoncerrar');

// Funcion para colapsar los input
const collapseInputs = () => {
    logo.classList.add('hidden');
    searchContainer.classList.add("w-full", "justify-center", "h-15");
    addLocationInput.classList.add("w-full");
    addGuestsInput.classList.add("w-full");
    searchButton.classList.remove("hidden");
    ocultarsearch.classList.add('hidden');
}

// Funcion para restaurar el estado original de los input
const restoreInputs = () => {
    logo.classList.remove('hidden');
    searchContainer.classList.remove("w-full", "justify-center");
    addLocationInput.classList.remove('w-full');
    addGuestsInput.classList.remove('w-full');
    searchButton.classList.add('hidden');
    ocultarsearch.classList.remove('hidden');
}

// Agregando eventos a los inputs
addLocationInput.addEventListener('click', collapseInputs);
addGuestsInput.addEventListener('click', collapseInputs);
searchButton.addEventListener('click', restoreInputs);

// Restaurar al hacer click fuera de los inputs
document.addEventListener('click', (e) => {
    if (e.target !== addLocationInput && e.target !== addGuestsInput) {
        restoreInputs();
    }
});

// Funcion para mostrar los lugares
addLocationInput.addEventListener('click', () => {
    lugaresContainer.classList.toggle('hidden');
});
// Funcion para mostrar los lugares
lugaresContainer.addEventListener('click', (e) => {
    const { target } = e;
    const {tagName} = target;
    if (tagName === 'LI'){
        addLocationInput.value = target.textContent;
        lugaresContainer.classList.toggle('hidden');
    }
});

// Función para verificar si es un dispositivo móvil
const isMobile = () => window.innerWidth <= 768;

// Función para reorganizar los inputs en columna en dispositivos móviles
const showInputsInColumn = () => {
    if (isMobile()) {
        searchContainer.classList.add('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4', 'min-h-[400px]'); // Contenedor con flexbox
        addLocationInput.classList.add('w-full', 'mb-2'); // Input de ubicación arriba con margen inferior
        addGuestsInput.classList.add('w-full'); // Input de invitados debajo
        searchButton.classList.add('w-full', 'mt-2'); // Botón debajo con margen superior
    }
};

// Función para restaurar el diseño original
const restoreInputsLayout = () => {
    searchContainer.classList.remove('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4', 'min-h-[400px]');
    addLocationInput.classList.remove('w-full', 'mb-2');
    addGuestsInput.classList.remove('w-full');
    searchButton.classList.remove('w-full', 'mt-2');
};

// Evento para reorganizar los inputs al hacer clic en los inputs
addLocationInput.addEventListener('click', showInputsInColumn);
addGuestsInput.addEventListener('click', showInputsInColumn);

// Evento para restaurar el diseño original al hacer clic fuera del searchContainer
document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        restoreInputsLayout();
    }
});

