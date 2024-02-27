import { CDN } from "../utils/urls";

const Card = (props) => {
    const {name, avgRating, locality, areaName, costForTwo, cuisines, cloudinaryImageId} = props.restaurant.info;
    const {link} = props.restaurant.cta;
    
    return (
        <div id="card-base" onClick={()=>{window.open(link)}}>
            <div id="card">
                <div id="food-image-div">
                    <img id="food-image" alt="food-image" src={CDN + "/" + cloudinaryImageId} />
                </div>
                
                <div id="card-title">
                    <div id="res-name">
                        {name}
                    </div>
                    <div id="food-rating">{avgRating}</div>
                </div>
                <hr></hr>
                <div id="restaurent-name">{cuisines.join(", ")}</div>
                {locality}, {areaName}
            </div>
        </div>

    )
}

export default Card;