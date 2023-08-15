import { Link } from "react-router-dom";

function Button( { link, buttonText }) {
    return (
        <div className="lemonButton highlighttext">
            <Link to={link}>{buttonText}</Link>
        </div>
    );
};

export default Button;