const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisine,rating,delivery_time_minutes,cloudinaryImageId} = resData?.data;
    
    return (
        <div className="res-card">
            <img className="res-logo" src={
              cloudinaryImageId }
              alt="res-logo"  />
            <h3>{name}</h3>
            <h3>{cuisine}</h3>
            <h3>{rating} rating</h3>
            <h3>{delivery_time_minutes} minutes</h3>
        </div>
    )
}

export default RestaurantCard;