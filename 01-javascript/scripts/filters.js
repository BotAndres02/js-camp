// Obtener valores de los filtros
const filters = {
  technology: document.getElementById('filter-technology'),
  location: document.getElementById('location'),
  experience: document.getElementById('experience-level')
};

const filterSection = document.querySelector('.search-filters');
const message = document.getElementById('filter-selected-value');

function getSelectedFilters() {
  return {
    technology: filters.technology ? filters.technology.value : '',
    location: filters.location ? filters.location.value : '',
    experience: filters.experience ? filters.experience.value : ''
  };
}

const matchesFilter = (filter, value) => !filter || filter === value;

filterSection.addEventListener('change', () => {
  const jobs = document.querySelectorAll('.job-listing-card');
  const selected = getSelectedFilters();
  
  jobs.forEach((job) => {
    const modalidad = job.getAttribute('data-modalidad');
    const nivel = job.getAttribute('data-nivel');
    const tecnologia = job.getAttribute('data-tecnologia');

    // For each non-empty selected filter, require the job to match it.
    const matchesTechnology = matchesFilter(selected.technology.includes(tecnologia), tecnologia);
    const matchesLocation = matchesFilter(selected.location, modalidad);
    const matchesExperience = matchesFilter(selected.experience, nivel);

    const shouldShow = matchesTechnology && matchesLocation && matchesExperience;
    job.classList.toggle('is-hidden', !shouldShow);
  });
});