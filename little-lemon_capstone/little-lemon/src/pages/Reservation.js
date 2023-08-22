import { useEffect, useState } from 'react';

function Reservation() {
    const [datetimeNow, setDatetimeNow] = useState();
    const [datetimeMax, setDatetimeMax] = useState();

    useEffect(() => {
        const now = new Date();
        const max = new Date(now.getDate() + 7);

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
                        step="1800"
                        value={datetimeNow}
                        min={datetimeNow}
                        max={datetimeMax}
                    />
                </form>
            </div>
        </div>
    );
};

export default Reservation;