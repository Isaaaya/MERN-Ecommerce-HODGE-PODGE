import { useState, useEffect } from "react";

export const usePagination = ({ page, setPage, totalPages }) => {
    const [totalPagesStatic, setTotalPagesStatic] = useState(1);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const pageNumberLimit = 5;

    const nextPage = () => {
        setPage((prevState) => prevState + 1);
        if (page + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const prevPage = () => {
        setPage((prevState) => prevState - 1);
        if ((page - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    useEffect(() => {
        if (totalPages >= 0) setTotalPagesStatic(totalPages);
    }, [totalPages]);

    const renderPageNumbers = Array(totalPagesStatic)
        .fill()
        .map((_, index) => {
            if (
                index + 1 < maxPageNumberLimit + 1 &&
                index + 1 > minPageNumberLimit
            ) {
                return (
                    <button
                        aria-label={`Go to the Page Number ${index + 1} Button`}
                        key={index + 1}
                        id={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={page === index + 1 ? "bg-pink-500/[0.3]" : ""}
                    >
                        {index + 1}
                    </button>
                );
            } else {
                return null;
            }
        });

    let pageIncrementDots = null;
    if (totalPages > maxPageNumberLimit) {
        pageIncrementDots = <button onClick={nextPage}> &hellip; </button>;
    }

    let pageDecrementDots = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementDots = <button onClick={prevPage}> &hellip; </button>;
    }


    return { nextPage, prevPage, renderPageNumbers, pageIncrementDots, pageDecrementDots, totalPagesStatic }

}
