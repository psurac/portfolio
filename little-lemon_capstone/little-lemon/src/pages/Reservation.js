import { useEffect, useState } from 'react';
import Restaurant from '../images/restaurant.jpg';
import UserInformation from '../components/fragments/UserInformation'
import './Reservation.css'

function Reservation() {
    const [ key, setKey] = useState(1);
    const [ timeUserChoose, setTimeUserChoose ] = useState();
    const [ datetimeNow, setDatetimeNow ] = useState();
    const [ datetimeMax, setDatetimeMax ] = useState();
    const [ userInfo, setUserInfo ] = useState();
    const [ userShow, setUserShow ] = useState();

    useEffect(() => {
        const now = new Date();
        const max = new Date();
        max.setDate(now.getDate() + 7);

        const formateDatetime = (date) => {
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hour = ('0' + date.getHours()).slice(-2);

            return `${year}-${month}-${day}T${hour}:00`;
        };

        const dateNow = formateDatetime(now);
        setDatetimeNow(dateNow);
        setDatetimeMax(formateDatetime(max));
        setTimeUserChoose(dateNow.split('T')[1].split(':')[0]);
    }, []);

    const submit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const hours = formData.get('datetimeTag').split('T')[1].split(':')[0];
        if (hours >= 13 && hours < 23) {
            setUserInfo('Please check your Mailbox and confirm!');
            setUserShow(true);
            setKey(key + 1);
        } else {
            setUserInfo('Opening hours from 1pm to 11pm');
            setUserShow(true);
        }
    };

    function dateTimeChangehandler(e) {
        const datetimeTag = document.getElementById(e.target.id);
        const datetime = new Date(e.target.value);
        if (datetime.getMinutes() !== 0) {
            const year = datetime.getFullYear();
            const month = ('0' + (datetime.getMonth() + 1)).slice(-2);
            const day = ('0' + datetime.getDate()).slice(-2);
            const hour = ('0' + datetime.getHours()).slice(-2);

            datetimeTag.value = `${year}-${month}-${day}T${hour}:00`;
        }
        const hours = datetime.getHours();
        if (hours < 13 || hours >= 23) {
            setUserInfo('Opening hours from 1pm to 11pm');
            setUserShow(true);
            datetimeTag.style.border = '2px red solid'
        } else {
            setUserInfo('');
            setUserShow(false);
            datetimeTag.style.border = '';
        }
    }

    return (
        <div>
            <div className="reserveation padd-right-left prim1" key={key}>
                <h1 className="title">Reserve a Table</h1>
                <img src={Restaurant} alt="restaurant" className='image' />
                <form className="reserve" onSubmit={submit} action='/reservation'>
                    <i className="icon"></i>
                    <select id="ocasion" defaultValue="ocasion">
                        <option value="ocasion">Ocasion</option>
                        <option value="casual">Casual</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    <label className="open-hours date-input" htmlFor='datetime'>
                        <input
                            id="datetime"
                            name='datetime'
                            type="datetime-local"
                            step="3600"
                            defaultValue={datetimeNow}
                            min={datetimeNow}
                            max={datetimeMax}
                            required
                            data-testid="datetime-local"
                            onChange={(e) => dateTimeChangehandler(e)}
                        />
                        Opening hours from 1pm to 11pm, just whole hours are valid.
                    </label>
                    <input
                        id='number-guests'
                        name='number-guests'
                        type='number'
                        placeholder='Number of guests'
                        max={12}
                        required
                    />
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Name'
                        required
                    />
                    <input
                        id="email"
                        name='email'
                        type="email"
                        placeholder='Email address'
                        required
                    />
                    <input
                        className='lemonButton'
                        type="submit"
                        value="Reserve"
                    />
                </form>
            </div>
            <UserInformation info={userInfo} show={userShow} />
        </div>
    );
};

export default Reservation;