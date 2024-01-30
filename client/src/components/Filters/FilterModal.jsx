import { useFilterModal } from "hooks/filterModal/useFilterModal";

const FilterModal = ({
  isMainModalOpen,
  closeMainModal,
  filters,
  setFilters,
  maxMinPrice,
}) => {
  const { filterModals, closeAllFilterModals } = useFilterModal();
  const handleCloseAllModals = () => {
    closeAllFilterModals();
    closeMainModal();
  };

  return (
    <div
      onClick={handleCloseAllModals}
      className={
        isMainModalOpen
          ? `fixed h-screen top-0 bg-black/[0.5] w-full z-50 overflow-hidden`
          : ""
      }
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-screen bg-white border-2 transition-all duration-300 ease-in-out w-[40%] flex flex-col gap-5 z-50 p-5 ${
          !isMainModalOpen && "-translate-x-full"
        }`}
      >
        {filterModals?.map((modal, index) => (
          <modal.component
            key={index}
            isFilterExpanded={modal?.isFilterExpanded}
            setIsFilterExpanded={modal?.setIsFilterExpanded}
            filters={filters}
            setFilters={setFilters}
            maxMinPrice={maxMinPrice}
          />
        ))}
      </aside>
    </div>
  );
};

export default FilterModal;
