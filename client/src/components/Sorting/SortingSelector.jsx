import { sortingOptions } from "utils/constants";

const SortingSelector = ({ setSortingType }) => {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">SORT BY</p>
      <select
        aria-label="Sorting Options"
        className="p-2 text-lg border-b-4"
        onChange={(e) => setSortingType(e.target.value)}
      >
        {sortingOptions?.map((option) => (
          <option
            aria-label={option?.caption}
            key={option?.value}
            value={option?.value}
          >
            {option?.caption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortingSelector;
