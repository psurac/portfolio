import { useEffect, useState } from 'react';
import Restaurant from '../images/restaurant.jpg';

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

    return (
        <div>
            <div className="reserve">
                <h1 className="title">Reserve a Table</h1>
                <img src={Restaurant} alt="restaurant" className='image' height="300px" />
                <form className="reserv">
                    <i className="icon"></i>
                    <select id="ocasion">
                        <option value="ocasion" selected>Ocasion</option>
                        <option value="casual">Casual</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    <input 
                        id="datetime" 
                        type="datetime-local" 
                        step="3600"
                        defaultValue={datetimeNow}
                        min={datetimeNow}
                        max={datetimeMax}
                    />
                    <input id="email" type="email" />
                    <input className='lemonButton' type="submit" value="Reserve" />
                </form>
            </div>
        </div>
    );
};

export default Reservation;