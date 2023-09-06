import restauranfood from '../images/restauranfood.jpg';
import './HeroSection.css';
import Button from './Button';
import { useSitesContext } from '../context/SitesContext.js';

function HeroSection() {
    const { getSitePathByName } = useSitesContext();
    const name = 'Reservation';
    const buttonText = 'Reserv a Table';
    return (
        <div className="prim1 padd-right-left hero-flex">
            <div className="hero-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="leadtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button link={getSitePathByName(name)} buttonText={buttonText} />
            </div>
            <img id='hero-image' className="image" src={restauranfood} alt="Food served in Little-Lemon" />
        </div>
    );
};

export default HeroSection;