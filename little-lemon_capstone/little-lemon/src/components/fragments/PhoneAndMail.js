import './PhoneAndMail.css';

function PhoneAndMail() {
    return (
        <div className='phone-mail-container'>
            <label className="email-label" htmlFor="email">
                <span>*</span>
                <input type="email" id="email" name="email" required placeholder="Email"></input>
            </label>
            <label className="phone-number-label" htmlFor="phone-number">
                <span>*</span>
                <input type="tel" id="phone-number" name="phone-number" required placeholder="Phone Number"></input>
            </label>
        </div>
    );
};

export default PhoneAndMail;