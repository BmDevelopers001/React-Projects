import React, { useContext, useState, ReactNode } from "react";
import sublinks, { sublinksType } from "./data";

type initialType = {
    isSubmenuOpen: boolean,
    isSidebarOpen: boolean,
    location: {
        center: number,
        bottom: number
    },
    pages: sublinksType | undefined,
    openSubmenu: (
        text: string,
        coordinates: {
            center: number,
            bottom: number
        }
    ) => void,
    openSidebar: () => void,
    closeSubmenu: () => void,
    closeSidebar: () => void
}

const AppContext = React.createContext<initialType>({
    isSubmenuOpen: false,
    isSidebarOpen: false,
    location: {
        center: 0,
        bottom: 0
    },
    pages: {
        page: '',
        links: []
    },
    openSubmenu: () => { },
    openSidebar: () => { },
    closeSubmenu: () => { },
    closeSidebar: () => { }
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
    const [location, setLocation] = useState({
        center: 0,
        bottom: 0
    });
    const [pages, setPages] = useState<sublinksType | undefined>({
        page: '',
        links: []
    })

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text: string, coordinates: {
        center: number,
        bottom: number
    }) => {
        const pageData = sublinks.find((link : sublinksType) => link.page === text);
        setPages(pageData);
        setLocation(coordinates);
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
                pages,
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