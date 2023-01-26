import React from "react";
import { CART_IMAGE_URL, PRABODHAM_LOGO_IMAGE } from "../constants";

const Header = () => {
  return (
    <div className="header">
      <img src={PRABODHAM_LOGO_IMAGE} />
      <ul>
        <li>
          <h4>Home</h4>
        </li>
        <li>
          <h4>About</h4>
        </li>
        <li>
          <h4>Contact Us</h4>
        </li>
        <li>
          <h4>Cart</h4>
        </li>
      </ul>
    </div>
  );
};

export default Header;
