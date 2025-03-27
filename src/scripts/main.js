/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js'
import { loadCharacters } from './utils.js';

// Seleccionamos los elementos del DOM que vamos a necesitar
const logo = document.querySelector('#logo');
const searchContainer = document.querySelector('#searchContainer');
const addLocationInput = document.querySelector('#addLocationInput');
const addGuestsInput = document.querySelector('#addGuestsInput');
const searchButton = document.querySelector('#searchButton');
const ocultarsearch = document.querySelector('#ocultar-logo');
const lugaresContainer = document.querySelector('#citiesContainer');
const botonguest = document.querySelector('#button-guest');
const display = document.querySelector('#display');
const botonguestN = document.querySelector('#button-guest-N');
const displayN = document.querySelector('#display-n');
const buttonGuestContainer = document.querySelector('#button-guest-container');
const editar = document.querySelector('#edit');
const botoncerrar = document.querySelector('#botoncerrar');
const alojamientos = document.querySelector('#stays');
console.log(alojamientos);

// Funcion para cargar los alojamientos
loadCharacters(stays, alojamientos);

// Función para mostrar las botones edit y cerrar
const showButtons = () => {
    editar.classList.remove('hidden');
    botoncerrar.classList.remove('hidden');
};

// Función para ocultar las botones edit y cerrar
const hideButtons = () => {
    editar.classList.add('hidden');
    botoncerrar.classList.add('hidden');
    searchContainer.classList.remove('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4');
};

// Evento para mostrar las botones edit y cerrar
addLocationInput.addEventListener('click', showButtons);
addGuestsInput.addEventListener('click', showButtons);

// Evento para ocultar las botones edit y cerrar
// botoncerrar.addEventListener('click', hideButtons);

// Función para cerrar las búsquedas
const closeSearch = () => {
    // Oculta los botones "Edit" y "Cerrar"
    editar.classList.add('hidden');
    botoncerrar.classList.add('hidden');

    searchContainer.classList.remove('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4', 'min-h-[500px]');
    searchContainer.classList.add('relative', 'flex', 'justify-center', 'sm:flex-row', 'sm:justify-end', 'items-center', 'mx-auto', 'px-8', 'py-2', 'bg-white', 'rounded-lg', 'shadow-md');
    addLocationInput.classList.remove('w-full', 'mb-2');
    addGuestsInput.classList.remove('w-full', 'mb-2');
    searchButton.classList.add('hidden'); // Oculta el botón de búsqueda
    lugaresContainer.classList.add('hidden'); // Oculta el contenedor de ciudades
    buttonGuestContainer.classList.add('hidden'); // Oculta el contenedor de invitados
};

// Evento para cerrar las búsquedas al hacer clic en el botón
botoncerrar.addEventListener('click', closeSearch);


// Funcion para colapsar los input
const collapseInputs = () => {
    logo.classList.add('hidden');
    searchContainer.classList.add("w-full", "justify-center", "h-50");
    addLocationInput.classList.add("w-full");
    addGuestsInput.classList.add("w-full");
    searchButton.classList.remove("hidden");
    ocultarsearch.classList.add('hidden');

}

// Funcion para restaurar el estado original de los input
const restoreInputs = () => {
    logo.classList.remove('hidden');
    searchContainer.classList.remove("w-full", "justify-center", "h-50");
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


// Función para verificar si es un dispositivo móvil
const isMobile = () => window.innerWidth <= 768;

// Función para reorganizar los inputs en columna en dispositivos móviles
const showInputsInColumn = () => {
    if (isMobile()) {
        searchContainer.classList.add('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4', 'min-h-[500px]'); // Contenedor con flexbox
        addLocationInput.classList.add('w-full', 'mb-2'); // Input de ubicación arriba con margen inferior
        addGuestsInput.classList.add('w-full'); // Input de invitados debajo
        searchButton.classList.add('w-30', 'mt-40'); // Botón debajo con margen superior
        lugaresContainer.classList.add('top-full');
        editar.classList.add('hidden');
        
        // buttonGuestContainer.classList.add('w-250', 'h-90');

        // Asegúrate de que lugaresContainer esté pegado al addLocationInput
        const inputRect = addLocationInput.getBoundingClientRect();
        lugaresContainer.style.top = `${inputRect.bottom}px`;
        lugaresContainer.style.left = `${inputRect.left -20}px`;
        lugaresContainer.style.top = `${inputRect.top -165}px`;
        lugaresContainer.style.width = `${inputRect.width}px`;
        lugaresContainer.classList.remove('hidden');
    }
};

// Función para restaurar el diseño original
const restoreInputsLayout = () => {
    searchContainer.classList.remove('flex', 'flex-col', 'items-center', 'w-full', 'px-4', 'py-4', 'min-h-[500px]');
    addLocationInput.classList.remove( 'mb-2');
    addGuestsInput.classList.remove('mb-2');
    searchButton.classList.remove('w-40', 'mt-2', 'justify-center');
    lugaresContainer.classList.add('hidden');
    
};

// Funcion para mostrar los lugares
addLocationInput.addEventListener('click', (e) => {
    e.stopPropagation();
    showInputsInColumn();
});

addGuestsInput.addEventListener('click', (e) => {
    e.stopPropagation();
    showInputsInColumn
})

// Funcion para ocultar los lugares
addGuestsInput.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague al documento
    restoreInputsLayout(); // Oculta el lugaresContainer al seleccionar el addGuestsInput
});

// Evento para restaurar el diseño original al hacer clic fuera del searchContainer
document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        restoreInputsLayout();
    }
}); 

// Funcion para mostrar los invitados
addGuestsInput.addEventListener('click', (e) => {
    const inputRect = addGuestsInput.getBoundingClientRect();
    const buttonGuestContainer = document.querySelector('#button-guest-container');

    // Posiciona el contenedor justo debajo del input de invitados
    buttonGuestContainer.style.top = `${inputRect.top -30 }px`; // Posiciona el contenedor justo debajo del input de invitados
    buttonGuestContainer.style.left = `${inputRect.left -15}px`; // Posiciona el contenedor justo debajo del input de invitados
    buttonGuestContainer.style.width = `${inputRect.width}px`; // Posiciona el contenedor justo debajo del input de invitados
    
    //muestra el contenedor de invitados
    buttonGuestContainer.classList.toggle('hidden'); // Muestra u oculta el contenedor de invitados
});

// Funcion para ocultar los invitados
document.addEventListener('click', (e) => {
    const buttonGuestContainer = document.querySelector('#button-guest-container');
    if (!searchContainer.contains(e.target)) {
        buttonGuestContainer.classList.add('hidden');
    }     
});



// Funcion para mostrar los lugares
lugaresContainer.addEventListener('click', (e) => {
    const { target } = e;
    const { tagName } = target;
    if (tagName === 'LI') {
        addLocationInput.value = target.textContent;
        lugaresContainer.classList.add('hidden');
    }
});

// Evento para reorganizar los inputs al hacer clic en los inputs
// addLocationInput.addEventListener('click', showInputsInColumn);
// addGuestsInput.addEventListener('click', showInputsInColumn);

// Evento para restaurar el diseño original al hacer clic fuera del searchContainer
document.addEventListener('click', (e) => {
    if (e.target !== addLocationInput && e.target !== addGuestsInput) {
        restoreInputsLayout();
    }
});


// Funcion para mostrar los huespedes

botonguestN.addEventListener('click', (e) => {
    const { target } = e;
    const { tagName } = target;
    const currentDisplay = parseInt(displayN.textContent);
    const currentInputValue = parseInt(addGuestsInput.value);
    if (tagName === 'BUTTON') {
        if (target.value === "-") {
            displayN.textContent = currentDisplay - 1;
            addGuestsInput.value = currentInputValue - 1;
        } else if (target.value === "+") {
            displayN.textContent = currentDisplay + 1;
            addGuestsInput.value = currentInputValue + 1;
        }
    }
});

botonguest.addEventListener('click', (e) => {
    const { target } = e;
    const { tagName } = target;
    const currentDisplay = parseInt(display.textContent);
    const currentInputValue = parseInt(addGuestsInput.value);
    if (tagName === 'BUTTON') {
        if (target.value === "-") {
            display.textContent = currentDisplay - 1;
            addGuestsInput.value = currentInputValue - 1;
        } else if (target.value === "+") {
            display.textContent = currentDisplay + 1;
            addGuestsInput.value = currentInputValue + 1;
        }
    }
});

