import { useState, useEffect } from "react";

export const usePage = ({ filters, search, sortingType }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [filters, search, sortingType]);

    return { page, setPage };
}
