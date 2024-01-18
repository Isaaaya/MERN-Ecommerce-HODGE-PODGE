import { usePagination } from "hooks/pagination/usePagination";

import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

const Pagination = ({ page, setPage, isPlaceholderData, totalPages }) => {
  const {
    nextPage,
    prevPage,
    totalPagesStatic,
    renderPageNumbers,
    pageIncrementDots,
    pageDecrementDots,
  } = usePagination({ page, setPage, totalPages });

  if (totalPagesStatic > 0)
    return (
      <nav className="flex items-center justify-center gap-5 [&_button]:text-[#7b0b45] [&_button]:text-lg [&_button]:text-center [&_button]:border-2 [&_button]:border-[#991157] [&_button]:w-8 [&_button]:h-8 [&_button]:rounded-md">
        <button
          aria-label="Go to the Previous Page Button"
          className={`${
            isPlaceholderData || page === 1 ? "bg-pink-500/[0.3]" : ""
          }`}
          onClick={prevPage}
          disabled={isPlaceholderData || page === 1}
        >
          <ChevronLeftIcon />
        </button>
        {pageDecrementDots}
        {renderPageNumbers}
        {pageIncrementDots}
        <button
          aria-label="Go to the Next Page Button"
          className={`${
            isPlaceholderData || page === totalPages ? "bg-pink-500/[0.3]" : ""
          }`}
          onClick={nextPage}
          disabled={isPlaceholderData || page === totalPages}
        >
          <ChevronRightIcon />
        </button>
      </nav>
    );
  else return null;
};

export default Pagination;
