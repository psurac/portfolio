import Button from "../components/Button";
import { useMenu } from "../context/MenuContext";
import { useSitesContext } from '../context/SitesContext.js';
import './Menu.css';

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
        <div className="menu">
            {menu.map((category) => (
                <div key={category} className="section">
                    <h2 className="sectiontitle category">{category}</h2>
                        {dishes.map((dish) => (
                            <div key={dish.id} className="dish padd-right-left">
                                <h4 className="cardtitle name">{dish.name}</h4>
                                <h4 className="highlighttext price">${dish.price}</h4>
                                <p className="weeksspecial description">{dish.description}</p>
                            </div>
                        ))}
                </div>
            ))}
            <Button className="button" link={link} buttonText={buttonText} />
        </div>
    );
};

export default Menu;