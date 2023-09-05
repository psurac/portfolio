import { useShoppingCard } from "../context/ShoppingCardContext";

function Order() {
    const { card } = useShoppingCard();
    return (
        <div className="order-container padd-right-left">
            { Array.isArray(card) && card.length ? card.map((item, index) => (
                <div className="meal" key={index}>
                    <h5 className="dish-name">{item.name}</h5>
                    <h5 className="dish-price">{item.price}</h5>
                    <span className="addings"> Additional:
                        { Array.isArray(item.customisation) && item.customisation.length ?
                        item.customisation.map((ingredient, index) =>(
                            index === 0 ? <> {ingredient.ingredient}</> : <>, {ingredient.ingredient}</>
                        )) : <>-</>}
                    </span>
                </div>
            )) : <span>Nothing selected</span> }
            <form className="order-form" onSubmit={null}>

            </form>
        </div>
    );
};

export default Order;