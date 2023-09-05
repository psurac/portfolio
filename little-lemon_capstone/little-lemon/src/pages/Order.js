import { useState } from 'react';
import { useSum } from '../hooks/useSum';
import { useShoppingCard } from "../context/ShoppingCardContext";
import { listEmptyChecker } from '../utility/listEmptyChecker';
import './Order.css';

function Order() {
    const [ key, setKey ] = useState(1);
    const [addressRequired, setAdressRequired] = useState(true);
    const { card, emptyCard } = useShoppingCard();

    const submitOrder = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append('card', JSON.stringify(card));
        alert('Please check your inbox and confirm your Mailing Address');
        emptyCard();
        setKey(key + 1);
    };

    return (
        <div className="order-container padd-right-left" key={key}>
            {listEmptyChecker(card) ? card.map((item, index) => (
                <div className="meal leadtext" key={index}>
                    <h5 className="dish-name">{item.name}</h5>
                    <h5 className="dish-price">{item.price}</h5>
                    <span className="addings highlighttext"> Additional:
                        {listEmptyChecker(item.customisation) ?
                            item.customisation.map((ingredient, index) => (
                                index === 0 ? <> {ingredient.ingredient}</> : <>, {ingredient.ingredient}</>
                            )) : <> -</>}
                    </span>
                </div>
            )) : <span>Nothing selected</span>}
            <span className="total-price highlighttext">Total Price: {useSum(card)}</span>
            <form className="order-form" onSubmit={(e) => submitOrder(e)}>
                <label className="check-order-label" htmlFor="check-order">
                    <span>*</span>
                    <input type="checkbox" id="check-order" name="check-order" required></input>
                    <span className="check-order-text"> I checked the Order and confirm.</span>
                </label>
                <label className="email-label" htmlFor="email">
                    <span>*</span>
                    <input type="email" id="email" name="email" required placeholder="Email"></input>
                </label>
                <label className="phone-number-label" htmlFor="phone-number">
                    <span>*</span>
                    <input type="tel" id="phone-number" name="phone-number" required placeholder="Phone Number"></input>
                </label>
                <div className='radio-container'>
                    <input
                        type="radio"
                        id="radio-takeaway"
                        name="radio-deliver-type"
                        value="TakeAway"
                        onChange={() => setAdressRequired(false)}
                    />
                    <label htmlFor="radio-takeaway"> TakeAway</label>
                    <input
                        type="radio"
                        id="radio-deliver"
                        name="radio-deliver-type"value="Deliver"
                        onChange={() => setAdressRequired(true)}
                        checked={addressRequired}
                    />
                    <label htmlFor="radio-deliver"> Deliver</label>
                </div>
                {addressRequired &&
                    <div className="addrss-from-container">
                        <h5 className="weeksspecial heading">Address</h5>
                        <label className="street-address-label" htmlFor="street-address">
                            <span className="street-address-text">Street house number</span>
                            <input
                                type="text"
                                id="street-address"
                                name="street-address"
                                required
                                placeholder="Street house number"></input>
                        </label>
                        <label className="zip-number-label" htmlFor="zip-number">
                            <span className="zip-number-text">Zip code</span>
                            <input
                                type="text"
                                id="zip-number"
                                name="zip-number"
                                required
                                placeholder="Zip Code"></input>
                        </label>
                        <label className="city-label" htmlFor="city">
                            <span className="city-text">City</span>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                placeholder="City"></input>
                        </label>
                    </div>
                }
                <label className="check-newsletter-label" htmlFor="check-newsletter">
                    <input type="checkbox" id="check-newsletter" name="check-newsletter" ></input>
                    <span className="check-newsletter-text"> I want to get the newsletter with the latet updates.</span>
                </label>
                <button
                    type='submit'
                    className="lemonButton-small"
                    style={{
                        opacity: !listEmptyChecker(card) &&  0.7,
                        boxShadow: !listEmptyChecker(card) &&  'none',
                        pointerEvents: !listEmptyChecker(card) &&  'none',
                    }}>
                        Order
                    </button>
            </form>
        </div>
    );
};

export default Order;