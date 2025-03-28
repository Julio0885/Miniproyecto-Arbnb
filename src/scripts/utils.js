/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

   // Funcion para cargar template imagenes de alojamientos
   export function loadCharacters(array, elementHTML) {
    elementHTML.innerHTML = '';
    array.forEach(item => {
        const template = characterTemplate(item.photo, item.superHost, item.type, item.beds,
            item.rating, item.title);
        elementHTML.innerHTML += template;
    });
}
    

function characterTemplate(photo, superHost, type, beds, rating, title) {
    const superHostButton = superHost ? `<button id="supper" class="w-30 p-2 border border-black rounded-lg inline-block">Super Host</button>`
    : ''; // Si no es true, no se renderiza nada`
    const template = `
        <div id="stays1" class="flex flex-col">
        <div class="mb-4">
            <img class="aspect-video rounded-lg object-cover" src="${photo}" alt="Hotels" >
        </div>
        <div>
            ${superHostButton}
            <p id="type-aparment" class=" ml-4 mt-2 inline-block">${type} .${beds}beds</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
                class="size-6  ml-6 mt-1 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <p id="rating" class=" inline-block mt-2 ml-2">${rating}</p>
            <h3 id="title" class="font-bold text-1xl text-black">${title}</h3>
        </div>
        `
    return template;
}