import Logo from './Logo.svg';
import Basket from './images/basket.svg';
import Nav from './Nav.js';
import { useShoppingCard } from "./context/ShoppingCardContext";

function Header() {
    const { toggleShowCard, cardHasElements } = useShoppingCard();
    const styleBasket = cardHasElements ?
        {backgroundColor: 'var(--prim2)'} : {backgroundColor: 'var(--sec3)'};

    return (
        <header className='felxBoxHeader'>
            <div className="header_logo">
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <div className="header_menu">
                <Nav />
            </div>
            <div
                className="basket-container"
                onClick={() => toggleShowCard()}
                style={styleBasket}
            >
                <img className="" src={Basket} alt="Shopping Card" style={{width: '33px'}} />
            </div>
        </header>
    );
};

export default Header;