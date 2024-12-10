import React from "react";
import ReactDOM from "react-dom/client";


/*
* Header
  * Logo
  * Nav Items
* Body
 * Search
 * Restaurant container
    * Rest Card
      - Image, Name of Res, Star Rating , Cuisines ,
* Footer
  * Copyright
  * Links
  * Address
  * Contact
*/

const Header = () =>
{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisine,rating,delivery_time_minutes,cloudinaryImageId} = resData;
    
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

 const resList =  [
    {
      "name": "Pizza Palace",
      "cuisine": "Italian",
      "rating": 4.5,
      "delivery_time_minutes": 30,
      "cloudinaryImageId":"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg"
    },
    {
      "name": "Curry Delight",
      "cuisine": "Indian",
      "rating": 4.7,
      "delivery_time_minutes": 25,
      "cloudinaryImageId": "https://img.freepik.com/free-photo/diet-menu-healthy-vegetarian-salad-fresh-vegetables-tomatoes-cucumber-sweet-peppers-porridge-bowl-vegan-food_2829-19933.jpg"
    },
    {
      "name": "Sushi Express",
      "cuisine": "Japanese",
      "rating": 4.3,
      "delivery_time_minutes": 40,
      "cloudinaryImageId": "pexels-photo-1639563.jpeg"
    },
    {
      "name": "Burger Hub",
      "cuisine": "American",
      "rating": 4.2,
      "delivery_time_minutes": 20,
      "cloudinaryImageId": "pexels-photo-315755.jpeg"
    },
    {
      "name": "Healthy Bites",
      "cuisine": "Vegan",
      "rating": 4.8,
      "delivery_time_minutes": 35,
      "cloudinaryImageId": "pexels-photo-1640777.jpeg"
    }
  ];

  // not using key (not acceptable) <<< index as key <<< unique id (best practice)

const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
             {resList.map((restaurant)=> ( 
             <RestaurantCard key={restaurant.id} resData={restaurant} />
             ))}
             
            
            </div>
        </div>
    )
}


const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
