import { useState, useEffect } from 'react';
import { useShoppingCard } from "../context/ShoppingCardContext";
import { useSitesContext } from '../context/SitesContext.js';
import Button from './Button';
import './Special.css';

function Special({ dish }) {
    const { addToCard } = useShoppingCard();
    const { sites } = useSitesContext();
    const name = 'Reservation';
    const link = sites.find(item => item.name === name).path;

    const [image, setImage] = useState(null);
    useEffect(() => {
        async function loadImage() {
            import(`../images/${dish.image}`)
                .then((importImage) => setImage(importImage.default))
                .catch((error) => console.log(`Error in ${dish.name} by loading Image`, error));
        }

        loadImage();
    }, [dish]);

    return (
        <div className="special sec2">
            <img className='image' src={image} alt={dish.name} />
            <h3 className="cardtitle">{dish.name}</h3>
            <h4 className="highlighttext">${dish.price}</h4>
            <p className="weeksspecial">{dish.description}</p>
            <div className="specail-action">
                <button className='lemonButton' onClick={() => addToCard(dish)}>Enjoy at Home</button>
                <button className='lemonButton' onClick={() => window.location.href=link}>Enjoy at Little-Lemon</button>
            </div>
        </div>
    );
};

export default Special;