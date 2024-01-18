import { SearchIcon } from "components/Icons";
import { useState } from "react";
import { Button } from "components/common";

const SearchBar = ({ setSearch, searchBy, areInstancesFetching }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex items-center justify-between gap-2 my-5 overflow-hidden rounded-full shadow-md">
      <input
        value={searchQuery}
        aria-label="Search"
        onKeyDown={(e) => e.key === "Enter" && setSearch(searchQuery)}
        className="w-full px-5 py-3 border-2 rounded-full"
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder={`Search ${searchBy ? `by ${searchBy}` : ""}`}
      />
      <Button
        disabled={areInstancesFetching}
        spinner={areInstancesFetching}
        onClick={() => setSearch(searchQuery)}
        caption={<SearchIcon />}
        extraStyles="absolute right-3 h-10 px-2 text-gray-600"
      />
    </div>
  );
};

export default SearchBar;
