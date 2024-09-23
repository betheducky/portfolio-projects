import React from "react";
import ShopLive from "./../../assets/shop-live.jpg";
import ShopStudio from "./../../assets/shop-studio.jpg";
import "./styles.scss";

const Directory = () => {
  return (
    <>
      <div className="directory">
        <div className="wrap">
          <div
            style={{
              backgroundImage: `url(${ShopLive})`,
            }}
            className="item"
          >
            <a href="">Shop Live</a>
          </div>
        </div>
        <div className="wrap">
          <div
            style={{
              backgroundImage: `url(${ShopStudio})`,
            }}
            className="item"
          >
            <a href="">Shop Studio</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Directory;
