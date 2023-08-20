import Button from "../components/Button";
import { useMenu } from "../context/MenuContext";
import { useSitesContext } from '../context/SitesContext.js';

function Menu() {
    const dishes = useMenu();
    const name = 'Reservation';
    const link = useSitesContext().find(item => item.name === name).path;
    const buttonText = 'Reserv a Table';

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
                        {dishes.map((dish) => (
                            <div key={dish.id}>
                                <h4>{dish.name}</h4>
                                <p>{dish.description}</p>
                                <h4>${dish.price}</h4>
                            </div>
                        ))}
                </div>
            ))}
            <Button link={link} buttonText={buttonText} />
        </div>
    );
};

export default Menu;