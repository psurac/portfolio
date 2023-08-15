import restauranfood from '../pictures/restauranfood.jpg';

function HeroSection() {
    return (
        <div className="flex-container">
            <div className="text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="leadtext"></p>
            </div>
            <div className="image">
                <img src={restauranfood} alt="Food served in Little-Lemon" width={200} />
            </div>
        </div>
    );
};

export default HeroSection;