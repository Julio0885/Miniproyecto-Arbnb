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

// Funcion para colapsar los input
const collapseInputs = () => {
    logo.classList.add('hidden');
    searchContainer.classList.add("w-full", "justify-center", "h-15");
    addLocationInput.classList.add("w-full");
    addGuestsInput.classList.add("w-full");
    searchButton.classList.remove("hidden", "w-full");
    ocultarsearch.classList.add('hidden');
}

// Funcion para restaurar el estado original de los input
const restoreInputs = () => {
    logo.classList.remove('hidden');
    searchContainer.classList.remove("w-full", "justify-center");
    addLocationInput.classList.remove('w-full');
    addGuestsInput.classList.remove('w-full');
    searchButton.classList.add('hidden');
}

// Agregando eventos a los inputs
addLocationInput.addEventListener('focus', collapseInputs);
addGuestsInput.addEventListener('focus', collapseInputs);
searchButton.addEventListener('click', restoreInputs);

