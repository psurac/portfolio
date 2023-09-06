import PhoneAndMail from '../components/fragments/PhoneAndMail';
import Address from '../components/fragments/Address';
import './Register.css';

function Register() {
    function submitRegistration(e) {
        alert('Check rour Mailbox and fonfirm the registration details');
    }
    return (
        <div className="padd-right-left registration-container">
            <h3 className="sectiontitle">Registration</h3>
            <forms className="register-form" onSubmit={(e) => submitRegistration(e)}>
                <PhoneAndMail />
                <label className="user-password-label" htmlFor="user-password-login">
                    *<input type="password" id="user-password-login" name="user-password-login" placeholder="Password" required></input>
                </label>
                <Address required={false} />
                <button type="submit" className="lemonButton-small textsmall">Register</button>
            </forms>
        </div>
    );
};

export default Register;