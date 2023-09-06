import { useState } from 'react';
import PhoneAndMail from '../components/fragments/PhoneAndMail';
import Address from '../components/fragments/Address';
import './Register.css';

function Register() {
    const [ key, setKey ] = useState(1);

    function submitRegistration(e) {
        e.preventDefault();
        alert('Check rour Mailbox and fonfirm the registration details');
        setKey(key + 1);
    }

    return (
        <div className="padd-right-left registration-container" key={key}>
            <h3 className="sectiontitle">Registration</h3>
            <form className="register-form" onSubmit={(e) => submitRegistration(e)}>
                <PhoneAndMail />
                <label className="user-password-label" htmlFor="user-password-login">
                    *<input type="password" id="user-password-login" name="user-password-login" placeholder="Password" required></input>
                </label>
                <Address required={false} />
                <button type="submit" className="lemonButton-small textsmall">Register</button>
            </form>
        </div>
    );
};

export default Register;