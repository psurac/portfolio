import Button from "./Button.js";
import { useSitesContext } from '../context/SitesContext.js';
import { useMenu } from "../context/MenuContext.js";
import Special from "./Special.js";
import './SpecialSection.css';

function SpecialsSection() {
    const name = 'Menu';
    const link = useSitesContext().find(item => item.name === name).path;
    const menu = useMenu();

    return (
        <div className="grid-ss padd-right-left">
            <h1 className="sectiontitle">Specials</h1>
            <Button link={link} buttonText={name} />
            <div className="specials-container">
                {menu.map(item => item.special ? <Special dish={item} key={item.id} /> : null)}
            </div>
        </div>
    );
};

export default SpecialsSection;