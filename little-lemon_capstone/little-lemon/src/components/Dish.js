import { useState } from 'react';
import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";
import "./Dish.css";

function Dish({ dish }) {
    const [ toggleCustom, setToggleCustom ] = useState(false);
    const [ sumDish, setSumDish ] = useState(dish.price);
    const [ key, setKey ] = useState(1);
    const { customs } = useMenu();
    const { addToCard } = useShoppingCard();

    const addToCardHandler = (e) => {
        e.preventDefault();
        const custom = [];
        const customDish = {...dish, price: sumDish};
        const data = new FormData(e.target);
        for (const key of data.keys()) {
            custom.push(customs[key]);
        }
        addToCard(customDish, custom);

        setKey(key + 1);
        setSumDish(dish.price);
        setToggleCustom(false);
    };

    return (
        <div className="dish-container textsmall" key={key}>
            <span className="dish-name weeksspecial">{dish.name}</span>
            <span className="dish-price">$ {dish.price}</span>
            <form className="customisation-form" onSubmit={addToCardHandler}>
                <div className="customisation-container" style={{display: toggleCustom ? 'flex' : 'none'}}>
                    {customs.map(({ ingredient, price }, key) => (
                        <label className="custom-flex-container" key={ingredient} htmlFor={ingredient}>
                            <div>
                                <input
                                    className='checkbox'
                                    type="checkbox"
                                    id={ingredient}
                                    name={key}
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