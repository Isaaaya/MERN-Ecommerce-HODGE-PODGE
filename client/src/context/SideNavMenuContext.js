import { createContext, useState } from "react";


export const SideNavMenuContext = createContext();

export function SideNavMenuProvider({ children }) {
    const [isSideNavMenuOpen, setIsSideNavMenuOpen] = useState(false);
    const [tabsAreOpen, setTabsAreOpen] = useState(null);

    const value = { isSideNavMenuOpen, setIsSideNavMenuOpen, tabsAreOpen, setTabsAreOpen };

    return (
        <SideNavMenuContext.Provider value={value}>{children}</SideNavMenuContext.Provider>
    )
}