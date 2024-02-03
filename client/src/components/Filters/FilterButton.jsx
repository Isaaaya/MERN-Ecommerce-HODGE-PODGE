import { useState } from "react";
import { usePreventScroll } from "hooks/preventScroll/usePreventScroll";

import { AdjustmentsHorizontalIcon } from "assets/icons";
import { FilterModal } from "Components/Filters";

const FilterButton = ({ filters, setFilters, maxMinPrice }) => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  usePreventScroll({ condition: isMainModalOpen });

  const openMainModal = () => {
    setIsMainModalOpen(true);
  };

  const closeMainModal = () => {
    setIsMainModalOpen(false);
  };

  return (
    <>
      <FilterModal
        maxMinPrice={maxMinPrice}
        filters={filters}
        setFilters={setFilters}
        isMainModalOpen={isMainModalOpen}
        closeMainModal={closeMainModal}
      />
      <button
        onClick={openMainModal}
        className="flex items-center gap-2 text-lg hover:underline underline-offset-4 decoration-2"
      >
        <AdjustmentsHorizontalIcon width="25" height="25" /> Filter
      </button>
    </>
  );
};

export default FilterButton;
