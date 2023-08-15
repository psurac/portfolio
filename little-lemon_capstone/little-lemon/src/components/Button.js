import { Link } from "react-router-dom";

function Button( { link, buttonText }) {
    return <Link to={link} className="lemonButton highlighttext">{buttonText}</Link>;
};

export default Button;