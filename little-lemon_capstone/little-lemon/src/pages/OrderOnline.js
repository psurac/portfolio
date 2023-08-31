import menuCategoryProducer from "../utility/menuCategoryProducer";
import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";

function OrderOnline() {
    const { dishes, customes } = useMenu();
    const menuCategory = menuCategoryProducer(dishes);
    const { addToCard, deleteFromCard, cloneCard } = useShoppingCard();

    const slidToSection = (category) => {
        const categorySection = document.getElementById(`${category}-section`);
        if (categorySection) {
            categorySection.scrollIntoView({
                behavior: 'smoth',
                block: 'start',
            });
        };
    };

    return (
        <div>
            <div className="nav-order-online">
                {menuCategory.map((category) => (
                    <a key={category} href={`/${category}`} onClick={slidToSection(category)}>{category}</a>
                ))}
            </div>
            <div className="flex-category-container">
                {menuCategory.map((category, index) => (
                    <div key={index} id={`${category}-section`}>
                        
                    </div>
                ))}
            </div>
            <h1>Order Online</h1>
        </div>
    );
};

export default OrderOnline;