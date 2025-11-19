import { JobListing, JobSearcher, Pagination } from "../components";
import { useEffect, useState } from "react";

const RESULTS_PER_PAGE = 4;

function useFilters() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experience: "",
    salary: 0,
    contractType: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (textToFilter) params.append("text", textToFilter);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.location) params.append("type", filters.location);
        if (filters.experience) params.append("level", filters.experience);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("limit", RESULTS_PER_PAGE);
        params.append("offset", offset);

        const queryParams = params.toString();

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`
        );
        const json = await response.json();

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [filters, textToFilter, currentPage]);

  /*const jobSalary = parseInt(job.data.salary) || 0;
  const minSalary = filters.salary ? parseInt(filters.salary) : 0;*/

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

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

  return {
    jobs,
    loading,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleChangeText,
    handleReset,
  };
}

export const SearchPage = () => {
  const {
    jobs,
    loading,
    totalPages,
    currentPage,
    handleSearch,
    handleChangeText,
    handleReset,
    handlePageChange,
  } = useFilters();
  return (
    <main>
      <JobSearcher
        onSearch={handleSearch}
        onChangeText={handleChangeText}
        onReset={handleReset}
      />

      <section>
        {loading ? <p>Cargando empleos...</p> : <JobListing data={jobs} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
};
