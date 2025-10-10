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

filterSection.addEventListener("change", (e) => {
  const element = e.target;

  if (Object.values(filtersId).includes(element.id)) {
    console.log(element.value);
  }
});
