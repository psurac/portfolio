import { useSum } from "../hooks/useSum";
import { useSitesContext } from '../context/SitesContext.js';
import { useShoppingCard } from "../context/ShoppingCardContext";
import { Link } from 'react-router-dom';
import { listEmptyChecker } from '../utility/listEmptyChecker';
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
            {listEmptyChecker(card) ? card.map((item, index) => (
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
                        opacity: !listEmptyChecker(card) &&  0.7,
                        boxShadow: !listEmptyChecker(card) &&  'none',
                        pointerEvents: !listEmptyChecker(card) &&  'none',
                    }}>
                        Order
                </Link>
                <h5 className="total-sum">Total: ${useSum(card)}</h5>
            </div>
        </div>
    );
};

export default ShoppingCard;