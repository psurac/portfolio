import { useSum } from '../hooks/useSum';
import { useShoppingCard } from "../context/ShoppingCardContext";
import './Order.css';

function Order() {
    const { card } = useShoppingCard();

    return (
        <div className="order-container padd-right-left">
            {Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal leadtext" key={index}>
                    <h5 className="dish-name">{item.name}</h5>
                    <h5 className="dish-price">{item.price}</h5>
                    <span className="addings highlighttext"> Additional:
                        {Array.isArray(item.customisation) && item.customisation.length ?
                            item.customisation.map((ingredient, index) => (
                                index === 0 ? <> {ingredient.ingredient}</> : <>, {ingredient.ingredient}</>
                            )) : <> -</>}
                    </span>
                </div>
            )) : <span>Nothing selected</span>}
            <span className="total-price highlighttext">Total Price: {useSum(card)}</span>
            <form className="order-form" onSubmit={null}>
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
                <label className="radio-deliver-type-label" htmlFor="radio-deliver-type">
                    <input type="radio" id="radio-deliver-type" name="radio-deliver-type" value="TakeAway" />
                    <span className="radio-deliver">TakeAway</span>
                </label>
                <label className="radio-deliver-type-label" htmlFor="radio-deliver-type">
                    <input type="radio" id="radio-deliver-type" name="radio-deliver-type" value="Deliver" checked/>
                    <span className="radio-deliver">Deliver</span>
                </label>
                <div className="addrss-from-container">
                    <h5 className="weeksspecial">Address</h5>
                    <label className="street-address-label" htmlFor="street-address">
                        <span className="street-address-text">Street and house number</span>
                        <input
                            type="text"
                            id="street-address"
                            name="street-address"
                            required
                            placeholder="Street and house number"></input>
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
                <label className="check-newsletter-label" htmlFor="check-newsletter">
                    <input type="checkbox" id="check-newsletter" name="check-newsletter" required></input>
                    <span className="check-newsletter-text"> I want to get the newsletter with the latet updates.</span>
                </label>
                <button type='submit' className="lemonButton-small">Order</button>
            </form>
        </div>
    );
};

export default Order;