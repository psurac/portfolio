import Logo from './Logo.svg';
import Nav from './Nav.js';

function Header() {
    return (
        <header>
            <div className="header_logo">
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <div className="header_menu">
                <Nav />
            </div>
        </header>
    );
};

export default Header;