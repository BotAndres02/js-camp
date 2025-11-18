import { useId, useState } from "react";
import styles from "./JobSearcher.module.css";

const JobSearcher = ({ onSearch, onChangeText, onReset }) => {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperience = useId();
  const idSalary = useId();
  const idContractType = useId();

  const [focusedField, setFocusedField] = useState(null);

  // TODO: Quitar flag cuando se implementen los campos
  const isVisible = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experience: formData.get(idExperience),
    };

    onSearch(filters);
  };

  const handleReset = () => {
    document.querySelector(".search-form").reset();
    onReset();
  };

  const handleTextChange = (e) => {
    const input = e.target.value;
    onChangeText(input);
  };

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form
        onSubmit={handleSubmit}
        id="empleos-search-form"
        className="search-form"
        role="search"
      >
        <div
          className={`search-bar ${
            focusedField === "search" ? styles.inputFocused : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            name={idText}
            id="empleos-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleTextChange}
            onFocus={() => setFocusedField("search")}
            onBlur={() => setFocusedField(null)}
          />

          <button type="submit">Buscar</button>
          <button type="button" onClick={handleReset}>
            Limpiar Filtros
          </button>
        </div>
        {focusedField === "search" && (
          <small className={styles.inputHint}>
            Busca por título de trabajo o empresa
          </small>
        )}

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnología</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="mobile">Mobile</option>
            <option value="react">React</option>
            <option value="node">Node.js</option>
          </select>

          <select name={idLocation} id="location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperience} id="experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid-level">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>

        {!isVisible && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor={idSalary}>Salario mínimo</label>
              <input
                type="number"
                name={idSalary}
                id={idSalary}
                placeholder="3000"
                min="0"
                step="1000"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={idContractType}>Tipo de contrato</label>
              <select name={idContractType} id={idContractType}>
                <option value="">Todos</option>
                <option value="full-time">Tiempo completo</option>
                <option value="part-time">Medio tiempo</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Prácticas</option>
              </select>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default JobSearcher;
