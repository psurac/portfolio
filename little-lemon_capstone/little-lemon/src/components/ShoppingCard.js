import { useShoppingCard } from "../context/ShopingCardContext";

function ShoppingCard() {
    const { card, addToCard, deleteFromCard, cloneCard } = useShoppingCard();
    
    return (
        <div className="shopping-card">
            {Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal" key={index}>
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <div
                        className="lemonButton"
                        /* onClick={deleteFromCard(index)} */
                    >X</div>
                </div>
            )) : (
                <span>Nothing selected</span>
            )}
        </div>
    );
};

export default ShoppingCard;