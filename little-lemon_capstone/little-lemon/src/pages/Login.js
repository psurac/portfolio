import Button from '../components/Button';
import { useSitesContext } from '../context/SitesContext';
import './Login.css';

function Login() {
    const name = 'Register';
    const { getSitePathByName } = useSitesContext();
    return (
        <div className="login-side-container padd-right-left">
            <div className="login-container">
                <form className="login-form" onSubmit={null}>
                    <label className="user-email-label" htmlFor="user-email-login">
                        <span>Email</span>
                        <input type="email" id="user-email-login" name="user-email-login" placeholder="Username" required></input>
                    </label>
                    <label className="user-password-label" htmlFor="user-password-login">
                        <span>Password</span>
                        <input type="password" id="user-password-login" name="user-password-login" placeholder="Password" required></input>
                    </label>
                    <button type="submit" className="lemonButton-small textsmall">Login</button>
                </form>
            </div>
            <div className="register-container">
                <span>Not yet registered? Click here: </span>
                <Button link={getSitePathByName(name)} buttonText={name} small={true} />
            </div>
        </div>
    );
};

export default Login;