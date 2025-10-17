// Obtener valores de los filtros
const filtersId = {
  technology: "filter-technology",
  location: "location",
  experience: "experience-level",
};

const filterSection = document.querySelector(".search-filters");
const message = document.getElementById("filter-selected-value");

filterSection.addEventListener("change", (e) => {
  const jobs = document.querySelectorAll(".job-listing-card");
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