import { createContext, useContext } from "react";

const SitesContext = createContext();

export const SitesContextProvider = ({ children }) => {
    const sites = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Menu',
            path: '/menu'
        },
        {
            name: 'Reservation',
            path: '/reservation'
        },
        {
            name: 'Order Online',
            path: '/order-online'
        },
        {
            name: 'Login',
            path: '/login'
        },
    ]
    return (
        <SitesContext.Provider value={sites}>
            {children}
        </SitesContext.Provider>
    );
};

export const useSitesContext = () => {
    return useContext(SitesContext);
}