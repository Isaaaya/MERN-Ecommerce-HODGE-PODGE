import React from "react";
import { handleCheckbox } from "utils/functions/handleCheckbox";

import { ArrowRightIcon, ArrowLeftIcon } from "../Icons";

const AvailabilityFilter = ({
  filters,
  setFilters,
  isFilterExpanded,
  setIsFilterExpanded,
}) => {
  return (
    <>
      <button
        onClick={() => setIsFilterExpanded((prevState) => !prevState)}
        className="flex items-center justify-between w-[90%]"
      >
        Availability <ArrowRightIcon />
      </button>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-screen bg-white border-2 transition-all duration-300 ease-in-out z-50 p-5 flex flex-col gap-5 ${
          isFilterExpanded ? "w-[40%]" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsFilterExpanded((prevState) => !prevState)}
          className="flex items-center justify-between w-[90%]"
        >
          Availability <ArrowLeftIcon />
        </button>
        <div className="flex flex-col gap-3">
          <label htmlFor="inStock">
            <input
              onChange={(e) =>
                handleCheckbox(e, "available", filters, setFilters)
              }
              aria-label="In Stock"
              id="inStock"
              name="inStock"
              type="checkbox"
            />{" "}
            In Stock
          </label>
          <label htmlFor="outOfStock">
            <input
              onChange={(e) =>
                handleCheckbox(e, "available", filters, setFilters)
              }
              aria-label="Out of Stock"
              id="outOfStock"
              name="outOfStock"
              type="checkbox"
            />{" "}
            Out of Stock
          </label>
        </div>
      </aside>
    </>
  );
};

export default AvailabilityFilter;
