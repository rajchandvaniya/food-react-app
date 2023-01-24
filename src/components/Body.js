import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1007377&lng=72.84849520000002&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    const restaurants = response?.data?.cards[2]?.data?.data?.cards;
    setRestaurants(restaurants);
  }

  if (restaurants.length === 0) return <Shimmer />;
  else
    return (
      <>
        <div className="search-container">
          <input
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => setRestaurants(filterData(searchText))}
          >
            Search
          </button>
        </div>
        <div className="body">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.id}
                {...restaurant.data}
              />
            );
          })}
        </div>
      </>
    );
};

function filterData(searchText) {
  return restaurantData.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default Body;
