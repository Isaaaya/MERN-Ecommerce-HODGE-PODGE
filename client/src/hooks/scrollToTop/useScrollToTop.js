import { useEffect } from "react"

export const useScrollToTop = (value = null) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [value])
}
