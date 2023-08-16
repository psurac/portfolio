function Special({dish}) {
    return (
        <div className="special">
            <img src={dish.image} alt={dish.name} />
            <h3 className="cardtitle">{dish.name}</h3>
            <h4 className="highlighttext">{dish.price}</h4>
            <p className="weeksspecial">{dish.description}</p>
        </div>
    );
};

export default Special;