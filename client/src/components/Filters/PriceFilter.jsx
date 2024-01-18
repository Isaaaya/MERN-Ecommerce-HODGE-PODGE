import { useState } from "react";

import { ArrowRightIcon, ArrowLeftIcon } from "components/Icons";

const PriceFilter = ({
  maxMinPrice,
  setFilters,
  isFilterExpanded,
  setIsFilterExpanded,
}) => {
  const [price, setPrice] = useState(maxMinPrice?.min);

  return (
    <>
      <button
        onClick={() => setIsFilterExpanded((prevState) => !prevState)}
        className="flex items-center justify-between w-[90%]"
      >
        Price <ArrowRightIcon />
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
          Price <ArrowLeftIcon />
        </button>
        <input
          aria-label="Price Range"
          name="price"
          type="range"
          min={maxMinPrice?.min}
          max={maxMinPrice?.max}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>{price}</p>
        <button
          className="w-full py-1 text-white duration-75 border-2 rounded-lg bg-sky-500 hover:bg-sky-600"
          onClick={() => setFilters((prevState) => ({ ...prevState, price }))}
        >
          Apply
        </button>
      </aside>
    </>
  );
};

export default PriceFilter;
