const contenedor = document.getElementById("contenedorPersonajes") // contenedor de la pagina 

fetch('https://rickandmortyapi.com/api/character') // Se hace una peticion fetch ala Api    
    .then((respuesta) => {  // Con el .then  Cuando  la  promesa se cumple resivimos una response o respuesta.
        return respuesta.json(); // Se convierte en formato json
    })
    .then((personajes) => {
        console.log(personajes)
        personajes.results.forEach((personaje) => { //Recorre cada personajes dentro de results. 
            const div = document.createElement('div') //Crea un nuevo elemento div
            div.classList.add('card')
            div.innerHTML = `<strong>${personaje.name}</strong><p>${personaje.gender}</p><img src='${personaje.image}'>`//dentro del div se inserta el nombre del personaje usando innerHTML
            contenedor.appendChild(div) //Agrega el ultimo de la lista
            
        });
    })
    .catch((error) =>{
        console.error("Error al hacer la petición", error); // En caso de no cumplir la peticion, va a mostrar erro en la consola, catch captura el error. 
    })
