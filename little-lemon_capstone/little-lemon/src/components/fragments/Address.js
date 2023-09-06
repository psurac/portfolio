import './Address.css';

function Address(required = true) {
    return (
        <div className="addrss-container">
            <h5 className="weeksspecial heading">Address</h5>
            <label className="street-address-label" htmlFor="street-address">
                <span className="street-address-text">Street house number</span>
                <input
                    type="text"
                    id="street-address"
                    name="street-address"
                    required={required}
                    placeholder="Street house number"></input>
            </label>
            <label className="zip-number-label" htmlFor="zip-number">
                <span className="zip-number-text">Zip code</span>
                <input
                    type="text"
                    id="zip-number"
                    name="zip-number"
                    required={required}
                    placeholder="Zip Code"></input>
            </label>
            <label className="city-label" htmlFor="city">
                <span className="city-text">City</span>
                <input
                    type="text"
                    id="city"
                    name="city"
                    required={required}
                    placeholder="City"></input>
            </label>
        </div>
    );
};

export default Address;