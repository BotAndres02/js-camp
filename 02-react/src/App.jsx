import "./App.css";
import jobs from "../public/data.json";

import { Header, Footer, JobCard, JobSearcher } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <JobSearcher />

        <section>
          <div>
            <h2>Resultados de búsqueda</h2>
          </div>

          <div className="jobs-listings">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                titulo={job.titulo}
                empresa={job.empresa}
                ubicacion={job.ubicacion}
                descripcion={job.descripcion}
              />
            ))}
          </div>

          <nav className="pagination">
            <a href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </a>
            <a className="is-active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
