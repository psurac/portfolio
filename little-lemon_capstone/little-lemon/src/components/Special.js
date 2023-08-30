import { useState, useEffect } from 'react';
import { useShoppingCard } from "../context/ShoppingCardContext";
import './Special.css';

function Special({ dish }) {
    const { addToCard } = useShoppingCard();

    const [image, setImage] = useState(null);
    useEffect(() => {
        async function loadImage() {
            import(`../images/${dish.image}`)
            .then( (importImage) => setImage(importImage.default))
            .catch( (error) => console.log(`Error in ${dish.name} by loading Image`, error));
        }

        loadImage();
    }, [dish]);

    return (
        <div className="special sec2">
            <img className='image' src={image} alt={dish.name} />
            <h3 className="cardtitle">{dish.name}</h3>
            <h4 className="highlighttext">${dish.price}</h4>
            <p className="weeksspecial">{dish.description}</p>
            <button className='lemonButton' onClick={() => addToCard(dish)}>Order Online</button>
        </div>
    );
};

export default Special;