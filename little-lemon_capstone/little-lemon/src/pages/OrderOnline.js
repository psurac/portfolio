import menuCategoryProducer from "../utility/menuCategoryProducer";
import { useMenu } from "../context/MenuContext";
import { useShoppingCard } from "../context/ShoppingCardContext";

function OrderOnline() {
    const { dishes, customes } = useMenu();
    const menuCategory = menuCategoryProducer(dishes);
    const { addToCard, deleteFromCard, cloneCard } = useShoppingCard();

    const slidToSection = (e, category) => {
        e.preventDefault();
        const categorySection = document.getElementById(`${category}-section`);
        if (categorySection) {
            categorySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };
    };

    return (
        <div>
            <div className="nav-order-online">
                {menuCategory.map((category, index) => (
                    <a key={index}
                        href={`/${category}`}
                        onClick={(e) => slidToSection(e, category.replace(/ /g,'').toLowerCase())}>
                        {category}
                    </a>
                ))}
            </div>
            <div className="flex-category-container">
                {menuCategory.map((category, index) => (
                    <div key={index} id={`${category.replace(/ /g,'').toLowerCase()}-section`}>

                    </div>
                ))}
            </div>
            <h1>Order Online</h1>
        </div>
    );
};

export default OrderOnline;