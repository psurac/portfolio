import { createContext, useContext, useState, useEffect, useReducer } from "react";

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
        case 'empty': {
            return [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};

export const ShoppingCardProvider = ({ children }) => {
    const [card, dispatch] = useReducer(cardReducer, []);
    const [showCard, setShowCard] = useState(false);
    const [cardHasElements, setCardHasElements] = useState(false);

    useEffect(() => {
        if (card.length > 0) {
            setCardHasElements(true);
        } else {
            setCardHasElements(false);
        }
    }, [card]);

    const toggleShowCard = () => {
        setShowCard(!showCard);
    }

    function addToCard(dishRich, customisation = []) {
        const dish = {
            id: dishRich.id,
            name: dishRich.name,
            price: dishRich.price,
            customisation: customisation,
        };
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

    function emptyCard() {
        dispatch({
            type: 'empty',
        })
    }

    return (
        <ShoppingCardContext.Provider
            value={{
                card,
                addToCard,
                deleteFromCard,
                cloneCard,
                emptyCard,
                showCard,
                toggleShowCard,
                cardHasElements
            }}>
            {children}
        </ShoppingCardContext.Provider>
    );
};

export const useShoppingCard = () => {
    return useContext(ShoppingCardContext);
};