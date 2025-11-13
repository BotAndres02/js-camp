import "./App.css";

import {
  Header,
  Footer,
  JobListing,
  JobSearcher,
  Pagination,
} from "./components";
import { useState } from "react";

import jobsData from "./db/data.json";

const RESULTS_PER_PAGE = 4;

function App() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experience: "",
  });
  const [textToFilter, settTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      filters.technology === "" || job.data.technology === filters.technology
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pageResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    settTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main>
        <JobSearcher onSearch={handleSearch} onTextFilter={handleTextFilter} />

        <section>
          <JobListing data={pageResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
