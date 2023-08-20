import { createContext, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const dishes = [
        {
            id: 1,
            special: true,
            name: 'Greek Salad',
            category: 'Starter',
            price: 12.99,
            image: 'greek_salad.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 2,
            special: true,
            name: 'Pizza Lemon',
            category: 'Main Course',
            price: 14.99,
            image: 'pizza_lemon.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 3,
            special: true,
            name: 'Lemon Desert',
            category: 'Dessert',
            price: 8.99,
            image: 'lemon_dessert.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 4,
            special: false,
            name: 'Pizza Fungi',
            category: 'Main Course',
            price: 13.99,
            image: 'pizza_lemon.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 5,
            special: false,
            name: 'Pizza Lemon',
            category: 'Main Course',
            price: 14.99,
            image: 'pizza_lemon.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
    ];
    
    return (
        <MenuContext.Provider value={dishes}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};