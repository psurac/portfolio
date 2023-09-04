import { useEffect, useState } from "react";
import { useShoppingCard } from "../context/ShoppingCardContext";
import './ShoppingCard.css';

function ShoppingCard({ Children }) {
    const [totalSum, setTotalSum] = useState(0);
    const { card, deleteFromCard, showCard, toggleShowCard } = useShoppingCard();
    const slideCardIn = showCard ? { right: '0', opacity: 0.95 } : {};

    useEffect(() => {
        let sum = 0;
        card.map(item => sum = Math.round((sum + item.price) * 100) / 100)
        setTotalSum(sum);
    }, [card]);

    return (
        <div className="shopping-card" style={slideCardIn}>
            <div>
                <button onClick={toggleShowCard} className="close-button">Close</button>
            </div>
            {Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal" key={index}>
                    <button
                        className="delete-button"
                        onClick={() => {
                            deleteFromCard(index)
                        }}
                    >X</button>
                    <h5 className="dish-name">{item.name}</h5>
                    <h5 className="dish-price">{item.price}</h5>
                </div>
            )) : (
                <span>Nothing selected</span>
            )}
            <div className="order-total-flex-container">
                <button onClick={null} className="check-order-button" disabled={!card.length}>Check and Order</button>
                <h5 className="total-sum">Total: ${totalSum}</h5>
            </div>
        </div>
    );
};

export default ShoppingCard;