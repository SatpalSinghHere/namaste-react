import Card from "./Card";
import DATA from "../utils/mockData";

const Body = () => {
    const {restaurants} = DATA;
    
    return (
        <div className='body'>
            {/* <input type="text" /> */}
            <div id="card-container">
                {restaurants.map((restaurant)=>{
                    return <Card restaurant={restaurant} key={restaurant.info.id}/>
                })}
                
            </div>
        </div>
    )
}

export default Body;