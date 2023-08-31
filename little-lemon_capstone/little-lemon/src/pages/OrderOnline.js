import menuCategoryProducer from "../utility/menuCategoryProducer";
import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";

function OrderOnline() {
    const { dishes, customes } = useMenu();
    const menuCategory = menuCategoryProducer(dishes);
    const { addToCard, deleteFromCard, cloneCard } = useShoppingCard();

    return (
        <div>
            <h1>Order Online</h1>
        </div>
    );
};

export default OrderOnline;