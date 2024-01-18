export const handleCheckbox = (e, field, filters, setFilters) => {
    if (e.target.checked) {
        setFilters((prevState) => ({
            ...prevState,
            [field]: [...filters?.[field], e.target.name],
        }));
    }
    if (!e.target.checked) {
        setFilters((prevState) => ({
            ...prevState,
            [field]: filters?.[field]?.filter(
                (filterOption) => filterOption !== e.target.name
            ),
        }));
    }
};