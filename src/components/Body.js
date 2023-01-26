import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./shimmer";
import allRestaurantsData from "../data/allRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  function fetchAllRestaurants() {
    const response = allRestaurantsData;
    const restaurantsCards = response?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(restaurantsCards);
    setRestaurants(restaurantsCards);
  }

  if (allRestaurants.length === 0) return <Shimmer />;
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
              setRestaurants(filterData(e.target.value, allRestaurants));
            }}
          />
          <button
            className="search-btn"
            onClick={() =>
              setRestaurants(filterData(searchText, allRestaurants))
            }
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

function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default Body;
