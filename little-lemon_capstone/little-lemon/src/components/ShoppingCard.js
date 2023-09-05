import { useSum } from "../hooks/useSum";
import { useSitesContext } from '../context/SitesContext.js';
import { useShoppingCard } from "../context/ShoppingCardContext";
import { Link } from 'react-router-dom';
import './ShoppingCard.css';

function ShoppingCard({ Children }) {
    const { sites } = useSitesContext();
    const name = 'Order';
    const link = sites.find(item => item.name === name).path;
    const { card, deleteFromCard, showCard, toggleShowCard } = useShoppingCard();
    const slideCardIn = showCard ? { right: '0', opacity: 0.95 } : {};

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
                <Link
                    to={link}
                    onClick={toggleShowCard}
                    className="check-order-button"
                    style={{
                        opacity: !card.length &&  0.7,
                        boxShadow: !card.length &&  'none',
                        pointerEvents: !card.length &&  'none',
                    }}>
                        Order
                </Link>
                <h5 className="total-sum">Total: ${useSum(card)}</h5>
            </div>
        </div>
    );
};

export default ShoppingCard;