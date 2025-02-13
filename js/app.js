
// PELICULAS

const btnPeliculas = document.querySelector("#peliculas");
const containerPeliculas = document.querySelector(".container");

function cargarPeliculas(){
    fetch("http://192.168.100.166/apisakila/peliculas/all")
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

function showForm(){
    formNewActor.style.display = "block";
    containerPeliculas.style.display = "none";
}

function saveActor(){

    let name = inputName.value;
    let lastname = inputLastName.value;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("lastname", lastname);

    fetch("http://192.168.100.166/apisakila/actores/new", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
 })
};

// LANZAR FUNCIONES

btnNewActor.addEventListener("click", function(){
    showForm();
});

btnSaveActor.addEventListener("click", function(){
    saveActor();
})





