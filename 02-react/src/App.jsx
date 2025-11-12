import "./App.css";
import jobs from "./db/data.json";

import { Header, Footer, JobCard, JobSearcher, Pagination } from "./components";
import { useState } from "react";

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

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
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
