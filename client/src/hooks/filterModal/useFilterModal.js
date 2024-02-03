import { useState } from "react";

import {
    AvailabilityFilter,
    ImagesFilter,
    PriceFilter,
} from "components/Filters"

export const useFilterModal = () => {
    const [isAvailabilityExpanded, setIsAvailabilityExpanded] = useState(false);
    const [isImagesExpanded, setIsImagesExpanded] = useState(false);
    const [isPriceExpanded, setIsPriceExpanded] = useState(false);

    const filterModals = [
        {
            component: AvailabilityFilter,
            isFilterExpanded: isAvailabilityExpanded,
            setIsFilterExpanded: setIsAvailabilityExpanded,
        },
        {
            component: ImagesFilter,
            isFilterExpanded: isImagesExpanded,
            setIsFilterExpanded: setIsImagesExpanded,
        },
        {
            component: PriceFilter,
            isFilterExpanded: isPriceExpanded,
            setIsFilterExpanded: setIsPriceExpanded,
        },
    ];

    const closeAllFilterModals = () => {
        setIsAvailabilityExpanded(false);
        setIsImagesExpanded(false);
        setIsPriceExpanded(false);
    }

    return { filterModals, closeAllFilterModals }
}
