import JobCard from "./JobCard";
const JobListing = ({ data: jobData }) => {
  return (
    <>
      <div>
        <h2>Resultados de búsqueda</h2>
      </div>
      {jobData.length === 0 && (
        <h4 style={{ textAlign: "center" }}>No hay ofertas disponibles!</h4>
      )}
      <div className="jobs-listings">
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            titulo={job.titulo}
            empresa={job.empresa}
            descripcion={job.descripcion}
            ubicacion={job.ubicacion}
          />
        ))}
      </div>
    </>
  );
};
export default JobListing;
