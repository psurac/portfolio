import { useState } from 'react';
import PhoneAndMail from '../components/fragments/PhoneAndMail';
import Address from '../components/fragments/Address';
import UserInformation from '../components/fragments/UserInformation'
import './Register.css';

function Register() {
    const [ key, setKey ] = useState(1);
    const [ userInfo, setUserInfo ] = useState();
    const [ userShow, setUserShow ] = useState();

    function submitRegistration(e) {
        e.preventDefault();
        setUserInfo('Please check your Mailbox and confirm!');
        setUserShow(true);
        setKey(key + 1);
    }

    return (
        <div className="padd-right-left registration-container">
            <h3 className="sectiontitle">Registration</h3>
            <form className="register-form" onSubmit={(e) => submitRegistration(e)} key={key}>
                <PhoneAndMail />
                <label className="user-password-label" htmlFor="user-password-login">
                    *<input type="password" id="user-password-login" name="user-password-login" placeholder="Password" required></input>
                </label>
                <Address required={false} />
                <button type="submit" className="lemonButton-small textsmall">Register</button>
            </form>
            <UserInformation info={userInfo} show={userShow} />
        </div>
    );
};

export default Register;