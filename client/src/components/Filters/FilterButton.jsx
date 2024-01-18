import { useState, useEffect } from "react";

import { AdjustmentsHorizontal } from "components/Icons/index";
import { FilterModal } from "components/Filters/index";

const FilterButton = ({ filters, setFilters, maxMinPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (document) {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);
  return (
    <>
      <FilterModal
        maxMinPrice={maxMinPrice}
        filters={filters}
        setFilters={setFilters}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 text-lg hover:underline underline-offset-4 decoration-2"
      >
        <AdjustmentsHorizontal /> Filter
      </button>
    </>
  );
};

export default FilterButton;
