import Logo from './Logo.svg';
import Nav from './Nav.js';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <img src={Logo} alt="Little Lemon Logo" />
                </div>
                <div className="header__menu">
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;