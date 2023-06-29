import React,{ useContext, useState, ReactNode } from "react";
// import sublinks from "./data";

type initialType = {
    isSubmenuOpen: boolean,
    isSidebarOpen: boolean,
    location: {},
    openSubmenu: () => void,
    openSidebar: () => void,
    closeSubmenu: () => void,
    closeSidebar: () => void
}

const AppContext = React.createContext<initialType>({
    isSubmenuOpen : false,
    isSidebarOpen : false,
    location : {},
    openSubmenu : () => {},
    openSidebar : () => {},
    closeSubmenu : () => {},
    closeSidebar : () => {}
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
    const [location, setLocation] = useState({})

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text,coordinates : {}) => {
        setLocation(coordinates)
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={
            {
                isSubmenuOpen,
                isSidebarOpen,
                location,
                openSubmenu,
                openSidebar,
                closeSubmenu,
                closeSidebar
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider;