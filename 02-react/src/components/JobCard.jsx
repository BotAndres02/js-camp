import { useState } from "react";

const JobCard = ({ data, titulo, empresa, ubicacion, descripcion }) => {
  const [isApplied, setIsApplied] = useState(false);
  const text = isApplied ? "Aplicado" : "Aplicar";
  const btnClass = isApplied ? "is-applied" : "";

  const handleApplyClick = () => {
    setIsApplied(!isApplied);
  };
  return (
    <article className="job-listing-card" {...(data ?? "")}>
      <div>
        <h3>{titulo}</h3>
        <small>
          {empresa} | {ubicacion}
        </small>
        <p>{descripcion}</p>
      </div>
      <button
        disabled={isApplied}
        className={`button-apply-job ${btnClass}`}
        onClick={handleApplyClick}
      >
        {text}
      </button>
    </article>
  );
};

export default JobCard;
