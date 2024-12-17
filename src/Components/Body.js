import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";


const Body = () =>{
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() =>{
                    console.log("Button clicked");
                }}>
                    Top Rated Restaurant  
                </button>
            </div>
            <div className="res-container">
             {resList.map((restaurant)=> ( 
             <RestaurantCard key={restaurant.id} resData={restaurant} />
             ))}
             
            
            </div>
        </div>
    )
}
export default Body;