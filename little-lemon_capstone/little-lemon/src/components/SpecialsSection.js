import Button from "./Button.js";
import { useSitesContext } from '../context/SitesContext.js';

function SpecialsSection() {
    const name = 'Menu';
    const link = useSitesContext().find(item => item.name === name).path;

    return (
        <div className="grid-ss padd-right-left">
            <h1 className="sectiontitle">Specials</h1>
            <Button link={link} buttonText={name} />
            <div className="specials-container">
                Specials
            </div>
        </div>
    );
};

export default SpecialsSection;