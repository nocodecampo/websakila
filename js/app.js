
// PELICULAS

const btnPeliculas = document.querySelector("#peliculas");
const containerPeliculas = document.querySelector(".container");

function cargarPeliculas(){
    fetch("http://localhost/apisakila/peliculas/all", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0dS1hcGkuY29tIiwiYXVkIjoidHUtYXBpLmNvbSIsImlhdCI6MTczOTQ3MzAzMSwiZXhwIjoxNzM5NDc2NjMxLCJ1c2VyX2lkIjoxfQ.UoU_Rtc6TwP-eLz8aFaR1OMu_fivjsmX451ZENsn8ZQ" //+ localStorage.getItem
        }
    })
    .then(response => response.json())
    .then(data => {
        let output = "<h2>Peliculas</h2>";
        data.forEach(function(pelicula){
            output += `
                <div>
                    <h3>${pelicula.title}</h3>
                    <p>${pelicula.description}</p>
                </div>
            `;
        });
        containerPeliculas.innerHTML = output;
        containerPeliculas.style.display = "flex";
        formNewActor.style.display = "none";
    });
};

// LANZAR FUNCIONES

document.addEventListener("DOMContentLoaded", function(){
    cargarPeliculas();
});

btnPeliculas.addEventListener("click", function() {
    cargarPeliculas();
});



// ACTORES

const btnNewActor = document.querySelector("#new_actor");
const formNewActor = document.querySelector("#form_new_actor");
const btnSaveActor = document.querySelector("#save_actor");
const inputName = document.querySelector("#name");
const inputLastName = document.querySelector("#last_name");
const btnListarActores = document.querySelector("#list_actors");

// Función para mostrar formulario para añadir actores
function showForm(){
    formNewActor.style.display = "block";
    containerPeliculas.style.display = "none";
};

// Función para guardar nuevos actores
function saveActor(){

    let name = inputName.value;
    let lastname = inputLastName.value;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("lastname", lastname);

    fetch("http://localhost/apisakila/new_actor", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        formNewActor.style.display = "none"; // Ocultar formulario tras guardado
        containerPeliculas.style.display = "flex";
 })
};

// Función para mostrar todos los actores
function cargarActores(){
    fetch("http://localhost/apisakila/actores", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0dS1hcGkuY29tIiwiYXVkIjoidHUtYXBpLmNvbSIsImlhdCI6MTczOTQ3MzAzMSwiZXhwIjoxNzM5NDc2NjMxLCJ1c2VyX2lkIjoxfQ.UoU_Rtc6TwP-eLz8aFaR1OMu_fivjsmX451ZENsn8ZQ" //+ localStorage.getItem
        }
    })
    .then(response => response.json())
    .then(data => {
        let output = "<h2>Actores</h2>";
        data.forEach(function(actor){
            output += `
                <div class="actores-list">
                    <h3>${actor.first_name} ${actor.last_name}</h3>
                </div>
            `;
        });
        containerPeliculas.innerHTML = output;
        containerPeliculas.style.display = "flex";
    });
}


// LANZAR FUNCIONES

btnNewActor.addEventListener("click", function(){
    showForm();
});

btnSaveActor.addEventListener("click", function(){
    saveActor();
})

btnListarActores.addEventListener("click", function(){
    cargarActores();
})





