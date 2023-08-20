import Button from "../components/Button";
import { useMenu } from "../context/MenuContext";

function Menu() {
    const dishes = useMenu();
    const menu = [];
    dishes.forEach((dish) => {
        if (!menu.includes(dish.category)) menu.push(dish.category);
        console.log(dish.categorie);
    });

    return (
        <div>
            {menu.map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div>
                        {dishes.map((dish) => (
                            <h4 key={dish.id}>{dish.name}</h4>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;