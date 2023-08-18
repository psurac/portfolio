import './AboutSection.css'
import mario_adrian_a from '../images/Mario and Adrian A.jpg';
import mario_adrian_b from '../images/Mario and Adrian b.jpg';

function AboutSection() {
    return (
        <div className="about-flex">
            <div className="about-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="about-img">
                <img className="image" src={ mario_adrian_a } alt='Mario and Adrian' />
                <img className="image" src={ mario_adrian_b } alt='Mario and Adrian' />
            </div>
        </div>
    );
};

export default AboutSection;