import { createContext, useContext } from "react";

const SitesContext = createContext();

export const SitesContextProvider = ({ children }) => {
    const sites = [
        {
            name: 'Home',
            path: '/',
            showInNavBar: true,
        },
        {
            name: 'About',
            path: '/about',
            showInNavBar: true,
        },
        {
            name: 'Menu',
            path: '/menu',
            showInNavBar: true,
        },
        {
            name: 'Reservation',
            path: '/reservation',
            showInNavBar: true,
        },
        {
            name: 'Order Online',
            path: '/order-online',
            showInNavBar: true,
        },
        {
            name: 'Login',
            path: '/login',
            showInNavBar: true,
        },
        {
            name: 'Order',
            path: '/order',
            showInNavBar: false,
        },
        {
            name: 'Register',
            path: '/register',
            showInNavBar: false,
        }
    ]
    return (
        <SitesContext.Provider value={{sites}}>
            {children}
        </SitesContext.Provider>
    );
};

export const useSitesContext = () => {
    return useContext(SitesContext);
}