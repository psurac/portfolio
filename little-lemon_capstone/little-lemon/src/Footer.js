import Logo from './Logo.svg';
import Nav from './Nav.js';

function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <div className="footer">
                <Nav />
            </div>
        </footer>
    );
};

export default Footer;