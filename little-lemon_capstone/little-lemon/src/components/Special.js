import { useState, useEffect } from 'react';
import './SpecialSection.css';

function Special({ dish }) {
    const [image, setImage] = useState(null);
    useEffect(() => {
        async function loadImage() {
            const importImage = (await import(`../images/${dish.image}`)).default;
            setImage(importImage);
        }

        loadImage();
    }, [dish.image]);

    return (
        <div className="special sec1">
            <img className='image' src={image} alt={dish.name} />
            <h3 className="cardtitle">{dish.name}</h3>
            <h4 className="highlighttext">{dish.price}</h4>
            <p className="weeksspecial">{dish.description}</p>
            <span>Order</span>
        </div>
    );
};

export default Special;