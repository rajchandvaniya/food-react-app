import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input
          className="search-box"
          placeholder="Search"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="body">
        {Array(15)
          .fill("")
          .map((placeholder) => {
            return (
              <div className="restaurant-card shimmer">
                <div className="shimmer-img"></div>
                <button className="shimmer-btn"></button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
