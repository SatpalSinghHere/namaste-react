import Card from "./Card";
import ShimmerCard from "./ShimmerCard";
import DATA from "../utils/mockData";
import { useState, useEffect } from 'react';

const Body = () => {
    // const {restaurants} = DATA;
    const [restaurants, setRestaurants] = useState([]);


    const fetchData = async () => {
        const data = await
            fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5483694&lng=87.2813023&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        console.log(restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (restaurants.length === 0) {
        return (
            <div className="body">
                <div id="card-container">
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                </div>
            </div>

        )
    }

    else {
        return (
            <div className='body'>
                <button id="btn-top-rated" onClick={
                    () => {
                        setRestaurants(
                            restaurants.filter((restaurant) => {
                                if (restaurant.info.avgRating > 4.5) {
                                    return restaurants;
                                }
                            })
                        )
                        console.log(restaurants);
                    }
                }>Top rated</button>
                <div id="card-container">
                    {restaurants.map((restaurant) => {
                        return <Card restaurant={restaurant} key={restaurant.info.id} />
                    })}

                </div>
            </div>
        )
    }


}

export default Body;