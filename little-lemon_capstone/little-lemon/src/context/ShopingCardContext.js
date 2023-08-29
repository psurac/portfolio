import { createContext, useContext, useReducer } from "react";

const ShoppingCardContext = createContext();

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

export const ShoppingCardProvider = ({ children }) => {
    const [card, dispatch] = useReducer(cardReducer, []);

    function addToCard(dish) {
        dispatch({
            type: 'add',
            dish: dish,
        });
    };

    function deleteFromCard(index) {
        dispatch({
            type: 'delete',
            index: index,
        });
    };

    function cloneCard(index) {
        dispatch({
            type: 'clone',
            index: index,
        });
    }

    return (
        <ShoppingCardContext.Provider value={{ card, addToCard, deleteFromCard, cloneCard }}>
            {children}
        </ShoppingCardContext.Provider>
    );
};

export const useShoppingCard = () => {
    return useContext(ShoppingCardContext);
};