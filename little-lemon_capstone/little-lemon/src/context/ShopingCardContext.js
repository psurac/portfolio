import { createContext, useContext, useReducer } from "react";

const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
    const { card, dispatch } = useReducer(cardReducer, []);

    function cardReducer(card, action) {
        switch (action.type) {
            case 'add': {
                return [...card, action.dish];
            }
            case 'delete': {
                return card.filter((_, index) => index !== action.index);
            }
            case 'clone': {
                return [...card, card.filter((_, index) => index === action.index)];
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    };
    return (
        <ShoppingCardContext.Provider value={{ card, dispatch }}>
            {children}
        </ShoppingCardContext.Provider>
    );
};

export const useShoppingCard = () => {
    return useContext(ShoppingCardContext);
};