import { useShoppingCard } from "../context/ShopingCardContext";
import './ShoppingCard.css';

function ShoppingCard({ Children }) {
    const { card, addToCard, deleteFromCard, cloneCard, showCard, toggleShowCard } = useShoppingCard();
    const slideCardIn = showCard ? { right: '0', opacity: 1 } : {};

    return (
        <div className="shopping-card" style={slideCardIn}>
            {Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal" key={index}>
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <div
                        className="lemonButton"
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