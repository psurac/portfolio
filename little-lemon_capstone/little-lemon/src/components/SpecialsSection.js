import Button from "./Button.js";

function SpecialsSection() {
    const link = '/Menu';
    const buttonText = 'Menu';

    return (
        <div className="grid-ss">
            <h1 className="sectiontitle">Specials</h1>
            <Button link={link} buttonText={buttonText} />

        </div>
    );
};

export default SpecialsSection;