import React from "react";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

function Pagination({ limit, total, offset, setOffset }) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pagesTotal = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="pagination">
    <li>
      <button className="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <AiOutlineLeft />
      </button>
    </li>
    {Array.from({ length: Math.min(MAX_ITENS, pagesTotal) })
      .map((_, index) => index + first)
      .map((page) => (
        <li key={page}>
          <button 
            onClick={() => onPageChange(page)}
            className={
              page === currentPage
                ? 'pagination__item--active'
                : null
            }
          >
            {page}
          </button>
        </li>
      ))}
    <li>
      <button className="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesTotal}
      >
        <AiOutlineRight />
      </button>
    </li>
  </ul>
);
};

export default Pagination;

      