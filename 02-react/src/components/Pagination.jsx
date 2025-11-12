const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevBtn = isFirstPage ? {PointerEvents: 'none', opacity: 0.5} : {};
  const styleNextBtn = isLastPage ? {PointerEvents: 'none', opacity: 0.5} : {};

  const handlePrevClick = (e) => {
    e.preventDefault();
    if(!isFirstPage){
        onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if(!isLastPage){
        onPageChange(currentPage + 1)
    }
  }

  const handlePageChange = (e, page) => {
    e.preventDefault();
    if(page !== currentPage){
        onPageChange(page)
    }
  };

  return (
    <nav className="pagination">
      <a href="#" onClick={handlePrevClick} style={stylePrevBtn}>
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

      {pages.map((page, id) => (
        <a
          key={id}
          href="#"
          className={currentPage === page ? "is-active" : ""}
          onClick={(event) => handlePageChange(event, page)}
        >
          {page}
        </a>
      ))}

      <a href="#" onClick={handleNextClick} style={styleNextBtn}>
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
  );
};

export default Pagination;
