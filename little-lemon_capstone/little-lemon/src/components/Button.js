import { Link } from "react-router-dom";

function Button( { link, buttonText, small = false } ) {
    return <Link to={link} className={small ? 'lemonButton-small highlighttext': 'lemonButton highlighttext'}>{buttonText}</Link>;
};

export default Button;