import { useEffect, useState } from 'react';

function Testimonial({ testi }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        async function loadImage() {
            import(`../images/${testi.image}`)
            .then((importImage) => setImage(importImage.default))
            .catch((error) => console.log(`Error in ${testi.name} by loading Image`, error));
        }

        loadImage();
    }, [testi]);

    return (
        <div className="testimonial">
            <img className="img" src={image} alt={testi.name} />
            <h3 className="cardtitle">{testi.name}</h3>
            <div className="rating">{Array.from({length: testi.rating}).map( () => (
                <span>&#9733;</span>))}</div>
        </div>
    );
};

export default Testimonial;