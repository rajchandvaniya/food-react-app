import { CLOUDINARY_URL, STAR_IMAGE } from "../constants";

const RestaurantCard = ({
    name,
    cuisines,
    area,
    cloudinaryImageId,
    avgRating
}) => {
    return (
        <div className="restaurant-card">
            <img src={ CLOUDINARY_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p style={{color: "gray"}}>{cuisines.slice(0, 3).join(", ")}</p>
            <p className="location-rating">
                <span>{area}</span>
                <span>{avgRating} <img style={{height: "15px", width: "15px"}} src={STAR_IMAGE} /></span>
            </p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

export default RestaurantCard;