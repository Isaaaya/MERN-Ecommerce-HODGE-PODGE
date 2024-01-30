import { handleCheckbox } from "utils/functions/handleCheckbox";

import { ArrowRightIcon, ArrowLeftIcon } from "assets/icons";

const ImagesFilter = ({
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
        Images <ArrowRightIcon width="25" height="25" />
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
          Images <ArrowLeftIcon width="25" height="25" />
        </button>
        <div className="flex items-center gap-3">
          <label htmlFor="images">
            <input
              aria-label="Images"
              onChange={(e) => handleCheckbox(e, "images", filters, setFilters)}
              id="images"
              name="images"
              type="checkbox"
            />{" "}
            With Images
          </label>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="noImages">
            <input
              aria-label="No Images"
              onChange={(e) => handleCheckbox(e, "images", filters, setFilters)}
              id="noImages"
              name="noImages"
              type="checkbox"
            />{" "}
            No Images
          </label>
        </div>
      </aside>
    </>
  );
};

export default ImagesFilter;
