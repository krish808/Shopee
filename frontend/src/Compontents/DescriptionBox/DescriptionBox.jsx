import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilittate buying
          and selling of products or ervices over the internet serves as a
          virtual marketplace where businesses and individual showcase their
          products, interact with customers, and conducts transactin without the
          need for a phyical presence. E-commerce websites have gained immense
          popularity due to their convenient accessibility, and the global reach
          they offer.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam
          earum a, ipsa maxime odio accusamus porro distinctio possimus sunt
          eligendi illum in doloremque rem eum? Ab sunt cumque aut?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
