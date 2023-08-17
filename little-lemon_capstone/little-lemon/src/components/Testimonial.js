function Testimonial({ testi }) {
    return (
        <div className="testimonial">
            <div className="testimonial-content">
                <h3>{testi.name}</h3>
                <p>{testi.text}</p>
            </div>
        </div>
    );
};

export default Testimonial;