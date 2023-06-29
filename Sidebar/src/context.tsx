import React, { useContext, useState, ReactNode } from "react";

type initialType = {
    isModalOpen: boolean,
    isSidebarOpen: boolean,
    openModal: () => void,
    closeModal: () => void,
    openSidebar: () => void,
    closeSidebar: () => void
}

const AppContext = React.createContext<initialType>({ 
    isModalOpen : false, 
    isSidebarOpen : false, 
    openModal : () => {}, 
    closeModal : () => {}, 
    openSidebar : () => {}, 
    closeSidebar : () => {} 
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }