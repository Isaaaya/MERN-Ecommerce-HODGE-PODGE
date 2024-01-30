import { useEffect, useState } from "react"

export const useDebounce = ({ value, delay }) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearInterval(timer);

    }, [value, delay])

    return debouncedValue;

}
