/*const button = document.querySelector("#boton-importante");

if (button !== null) {
  button.addEventListener("click", () => {
    button.classList.add("is-applied");
    button.textContent = "Aplicado";
    button.disabled = true;
  });
}*/

/* const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('is-applied');
        boton.textContent = 'Aplicado';
        boton.disabled = true;
    });
})
 */

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

// Obtener valores de los filtros
const filtersId = {
  technology: "filter-technology",
  location: "location",
  experience: "experience-level",
};

const filterSection = document.querySelector(".search-filters");
const message = document.getElementById("filter-selected-value");
const jobs = document.querySelectorAll(".job-listing-card");

filterSection.addEventListener("change", (e) => {
  const { value } = e.target;

  if (Object.values(filtersId).includes(e.target.id)) {
    message.textContent = `Elemento seleccionado
    : ${value}`;
  }

  jobs.forEach((job) => {
    const modalidad = job.getAttribute("data-modalidad");
    const isShown = value === "" || value === modalidad;
    job.classList.toggle("is-hidden", !isShown);
  });
});

async function getData() {
  try {

    const res = await fetch("./data.json");
    if(!res.ok) throw new Error(`http error! ${res.status}`)

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

//getData();
/** * Ejemplos de otros eventos

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
