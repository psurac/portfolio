import { createContext, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const dishes = [
        {
            id: 1,
            special: true,
            name: 'Greek Salad',
            price: 12.99,
            image: 'pictures/greek_salad.jpg',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 2,
            special: true,
            name: 'Pizza Lemon',
            price: 14.99,
            image: 'pictures/pizza_lemon.jpg',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 3,
            special: true,
            name: 'Lemon Desert',
            price: 8.99,
            image: 'pictures/lemon_dessert.jpg',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 4,
            special: false,
            name: 'Pizza Fungi',
            price: 13.99,
            image: 'pictures/pizza_lemon.jpg',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
        {
            id: 5,
            special: false,
            name: 'Pizza Lemon',
            price: 14.99,
            image: 'pictures/pizza_lemon.jpg',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        },
    ]
    return (
        <MenuContext.Provider value={dishes}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};