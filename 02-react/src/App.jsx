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
    salary: 0,
    contractType: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    const jobSalary = parseInt(job.data.salary) || 0;
    const minSalary = filters.salary ? parseInt(filters.salary) : 0;

    return (
      (filters.technology === "" ||
        job.data.technology === filters.technology) &&
      (filters.location === "" || job.data.modalidad === filters.location) &&
      (filters.experience === "" || job.data.nivel === filters.experience) &&
      (filters.contractType === "" ||
        job.data.contractType === filters.contractType) &&
      jobSalary >= minSalary
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return (
            job.titulo.toLowerCase().includes(textToFilter.toLowerCase()) ||
            job.empresa.toLowerCase().includes(textToFilter.toLowerCase())
          );
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (newFilters) => {
    setFilters({
      technology: newFilters.technology,
      location: newFilters.location,
      experience: newFilters.experience,
    });
    setTextToFilter(newFilters.search || "");
    setCurrentPage(1);
  };

  const handleChangeText = (text) => {
    setTextToFilter(text);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters({
      technology: "",
      location: "",
      experience: "",
    });

    setTextToFilter("");
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main>
        <JobSearcher
          onSearch={handleSearch}
          onChangeText={handleChangeText}
          onReset={handleReset}
        />

        <section>
          <JobListing data={pagedResults} />
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
