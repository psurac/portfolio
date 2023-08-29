import { createContext, useContext, useReducer } from "react";

const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
    const { card, dispatch } = useReducer(cardReducer, [{name: 'Test', price: '10',},{name: 'Test2', price: '11',},]);

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
        <ShoppingCardContext.Provider value={{ card, addToCard, deleteFromCard, cloneCard }}>
            {children}
        </ShoppingCardContext.Provider>
    );
};

export const useShoppingCard = () => {
    return useContext(ShoppingCardContext);
};