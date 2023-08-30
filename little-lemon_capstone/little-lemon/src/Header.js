import Logo from './Logo.svg';
import Basket from './images/basket.svg';
import Nav from './Nav.js';

function Header({ toggleShowCard }) {
    return (
        <header className='felxBoxHeader'>
            <div className="header_logo">
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <div className="header_menu">
                <Nav />
            </div>
            <div className="basket-container" onClick={() => toggleShowCard()}>
                <img className="" src={Basket} alt="Shopping Card" />
            </div>
        </header>
    );
};

export default Header;