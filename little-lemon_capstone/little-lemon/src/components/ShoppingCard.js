import { useShoppingCard } from "../context/ShoppingCardContext";
import './ShoppingCard.css';

function ShoppingCard({ Children }) {
    const { card, deleteFromCard, showCard, toggleShowCard } = useShoppingCard();
    const slideCardIn = showCard ? { right: '0', opacity: 0.95 } : {};

    return (
        <div className="shopping-card" style={slideCardIn}>
            <div>
                <button onClick={toggleShowCard} className="close-button">Close</button>
            </div>
            {Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal" key={index}>
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <div
                        className="close-button"
                        onClick={() => deleteFromCard(index)}
                    >X</div>
                </div>
            )) : (
                <span>Nothing selected</span>
            )}
        </div>
    );
};

export default ShoppingCard;