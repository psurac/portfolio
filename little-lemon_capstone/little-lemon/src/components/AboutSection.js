import './AboutSection.css'
import mario_adrian_a from '../images/Mario and Adrian A.jpg';
import mario_adrian_b from '../images/Mario and Adrian b.jpg';

function AboutSection() {
    return (
        <div className="padd-right-left about-flex">
            <div className="about-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="about-img">
                <img className="image" src={ mario_adrian_a } alt='Mario and Adrian' />
                <img className="image" src={ mario_adrian_b } alt='Mario and Adrian' />
            </div>
        </div>
    );
};

export default AboutSection;