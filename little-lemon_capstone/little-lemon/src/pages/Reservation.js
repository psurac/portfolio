function Reservation() {
    return (
        <div>
            <div className="reserve">
                <h1 className="title">Reserve a Table</h1>
                <form className="reserv">
                    <input list="ocasion" name="ocasion"/>
                    <detalist className="ocasion" id="ocasion">
                        <option value="Casual" />
                        <option value="Birthday" />
                        <option value="Engagement" />
                        <option value="Anniversary" />
                    </detalist>
                </form>
            </div>
        </div>
    );
};

export default Reservation;