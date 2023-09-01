import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";
import "./Dish.css";

function Dish({ dish }) {
    const { customs } = useMenu();
    const { addToCard, deleteFromCard } = useShoppingCard();
    return (
        <div className="dish-container textsmall">
            <span className="dish-name weeksspecial">{dish.name}</span>
            <span className="dish-price">$ {dish.price}</span>
            <form className="customisation-form" onSubmit={null}>
                <div className="customisation-container">
                    {customs.map(({ ingredient, price }) => (
                        <label key={ingredient} htmlFor={ingredient}>
                            <input type="checkbox" id={ingredient} name={ingredient} />
                            <span id={ingredient}>{ingredient}</span>
                            <span id={price}>{price}</span>
                        </label>
                    ))}
                </div>
                <button className="lemonButton-small" onClick={null}>Customais Dish</button>
                <button className="lemonButton-small" type="submit">Add to order</button>
            </form>
        </div>
    )
}

export default Dish;