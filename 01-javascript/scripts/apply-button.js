// Aplicar eventos a los botones de aplicar a jobs.
const jobListingSection = document.querySelector(".jobs-listings");

jobListingSection.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Aplicado";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

// - Comentarios con otros eventos interesantes

/*const button = document.querySelector("#boton-importante");
// otras formas de añadir eventos click a elementos
// recupera solo el primer boton que encuentre

if (button !== null) {
  button.addEventListener("click", () => {
    button.classList.add("is-applied");
    button.textContent = "Aplicado";
    button.disabled = true;
  });
}*/

/* const botones = document.querySelectorAll('.button-apply-job');
// devuelve un NodeList (array-like) con todos los botones que encuentre 
// o una lista vacia [] si no encuentra ninguno

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('is-applied');
        boton.textContent = 'Aplicado';
        boton.disabled = true;
    });
})
 */


// Ejemplos de otros eventos

/*
const searchInput = document.getElementById('empleos-search-input');

// Evento Input
searchInput.addEventListener('input', function(){
  console.log(searchInput.value)
})

// Evento Blur
searchInput.addEventListener('blur', function(){
  console.log(searchInput.value)
})

// Evento Keydown
searchInput.addEventListener('keydown', function(e){
  console.log("Pressed key: " + e.key)
  console.log("Is shift pressed: " + e.altKey);
  console.log("Is ctrl pressed: " + e.ctrlKey);
  console.log("Is shift pressed: " + e.shiftKey);
})

// Evento submit
const searchForm = document.getElementById('empleos-search-form');
searchForm.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('submit');
}) */