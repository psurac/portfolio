import { useState, useEffect } from 'react';

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
        <div className="special">
            <img className='image' src={image} alt={dish.name} />
            <h3 className="cardtitle">{dish.name}</h3>
            <h4 className="highlighttext">{dish.price}</h4>
            <p className="weeksspecial">{dish.description}</p>
        </div>
    );
};

export default Special;