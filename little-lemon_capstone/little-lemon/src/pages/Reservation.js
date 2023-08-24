import { useEffect, useState } from 'react';
import Restaurant from '../images/restaurant.jpg';
import './Reservation.css'

function Reservation() {
    const [datetimeNow, setDatetimeNow] = useState();
    const [datetimeMax, setDatetimeMax] = useState();

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

        setDatetimeNow(formateDatetime(now));
        setDatetimeMax(formateDatetime(max));
    }, []);

    const submit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const hours = formData.get('datetime').split('T')[1].split(':')[0];
        if (hours >= 13 && hours < 23) {
            alert('Please check your Mailbox and confirm!');
            event.target.submit();
        } else {
            alert('Opening hours from 1pm to 11pm');
        }
    };

    return (
        <div>
            <div className="reserveation padd-right-left prim1">
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
                    <div className='date-input'>
                        <input
                            id="datetime"
                            name='datetime'
                            type="datetime-local"
                            step="1800"
                            defaultValue={datetimeNow}
                            min={datetimeNow}
                            max={datetimeMax}
                            required
                        />
                        <label className="open-hours" htmlFor='datetime'>
                            Opening hours from 1pm to 11pm
                        </label>
                    </div>
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
        </div>
    );
};

export default Reservation;