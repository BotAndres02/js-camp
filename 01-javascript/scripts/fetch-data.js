const container = document.querySelector(".jobs-listings");
async function getData() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error(`http error! ${res.status}`);

    const data = await res.json();

    data.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.setAttribute("data-tecnologia", job.data.technology);
      article.setAttribute("data-modalidad", job.data.modalidad);
      article.setAttribute("data-nivel", job.data.nivel);

      article.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job" id="boton-importante">Aplicar</button>
      `;

      container.appendChild(article);
    });
  } catch (error) {
    console.error(error);
  }
}

getData();