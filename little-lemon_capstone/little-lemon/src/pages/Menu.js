import Button from "../components/Button";
import { useMenu } from "../context/MenuContext";

function Menu() {
    const dishes = useMenu();
    const menu = [];
    dishes.forEach((dish) => {
        if (!menu.includes(dish.categorie)) menu.push(dish.categorie);
        console.log(dish.categorie);
    });

    return (
        <div>
            {menu.map((categorie) => (
                <div key={categorie}>
                    <h2>{categorie}</h2>
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