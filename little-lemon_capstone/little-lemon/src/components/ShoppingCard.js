import { useShoppingCard } from "../context/ShopingCardContext";

function ShoppingCard() {
    const { card = [], dispatch } = useShoppingCard();

    return (
        <div className="shopping-card">
            {card.length !== 0 ? card.forEach((item, index) => (
                <div className="meal">
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <div
                        className="lemonButton"
                        onClick={null}
                    >X</div>
                </div>
            )) : null}
        </div>
    );
};

export default ShoppingCard;