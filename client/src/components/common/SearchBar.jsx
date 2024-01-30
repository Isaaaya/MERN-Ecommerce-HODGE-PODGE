const SearchBar = ({ search, setSearch, searchBy }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative z-0 flex items-center justify-between gap-2 my-5 overflow-hidden rounded-full shadow-md">
      <input
        value={search}
        aria-label="Search"
        className="w-full px-5 py-3 border-2 rounded-full"
        onChange={handleSearch}
        type="text"
        placeholder={`Search ${searchBy ? `by ${searchBy}` : ""}`}
      />
    </div>
  );
};

export default SearchBar;
