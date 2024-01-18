import { createContext, useState } from "react";


export const SideNavMenuContext = createContext();

export function SideNavMenuProvider({ children }) {
    const [isSideNavMenuOpen, setIsSideNavMenuOpen] = useState(false);


    const value = { isSideNavMenuOpen, setIsSideNavMenuOpen };

    return (
        <SideNavMenuContext.Provider value={value}>{children}</SideNavMenuContext.Provider>
    )
}