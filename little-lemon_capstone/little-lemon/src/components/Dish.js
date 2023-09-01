import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";

function Dish({ dish }) {
    const { customs } = useMenu();
    const { addToCard, deleteFromCard } = useShoppingCard();
    return (
        <div>
            <span>{dish.name}</span>
            <span>{dish.price}</span>
            <form className="customisation-form">
                <div className="customisation-container">
                    {customs.map(({ ingredient, price }) => (
                        <label key={ingredient} htmlFor={ingredient}>
                            <input type="checkbox" id={ingredient} name={ingredient} />
                            <span id={ingredient}>{ingredient}</span>
                            <span id={price}>{price}</span>
                        </label>
                    ))}
                </div>
                <button className="lemonButton" type="submit" onClick={null}>Add to order</button>
                <button className="lemonButton" onClick={null}>Customisat Dish</button>
            </form>
        </div>
    )
}

export default Dish;