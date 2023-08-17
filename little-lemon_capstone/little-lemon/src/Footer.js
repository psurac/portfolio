import Logo from './images/logo_big.png';
import Nav from './Nav.js';

function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <img src={Logo} alt="Little Lemon Logo" height="120" />
            </div>
            <div className="footer_menu">
                <Nav />
            </div>
        </footer>
    );
};

export default Footer;