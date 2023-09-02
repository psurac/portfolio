import { useState } from 'react';
import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";
import "./Dish.css";

function Dish({ dish }) {
    const [ toggleCustom, setToggleCustom ] = useState(false);
    const [ sumDish, setSumDish ] = useState(dish.price);
    const { customs } = useMenu();
    const { addToCard, deleteFromCard } = useShoppingCard();

    return (
        <div className="dish-container textsmall">
            <span className="dish-name weeksspecial">{dish.name}</span>
            <span className="dish-price">$ {dish.price}</span>
            <form className="customisation-form" onSubmit={null}>
                <div className="customisation-container" style={{display: toggleCustom ? 'block' : 'none'}}>
                    {customs.map(({ ingredient, price }) => (
                        <label className="custom-flex-container" key={ingredient} htmlFor={ingredient}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={ingredient}
                                    name={ingredient}
                                    onChange={(e) => {
                                        e.target.checked ?
                                            setSumDish(Math.round((sumDish + price) * 100) / 100) :
                                            setSumDish(Math.round((sumDish - price) * 100) / 100)
                                    }} />
                                <span id={ingredient}> {ingredient}</span>
                            </div>
                            <span id={price}>$ {price}</span>
                        </label>
                    ))}
                </div>
                <button
                    className="lemonButton-small"
                    onClick={(e) => {
                        e.preventDefault();
                        setToggleCustom(!toggleCustom);
                }}>
                    Customais Dish
                </button>
                <button className="lemonButton-small" type="submit">Add to order</button>
                <span className="price-sum">Total: $ {sumDish}</span>
            </form>
        </div>
    )
}

export default Dish;