import React from "react";
import ShopLive from "./../../assets/shop-live.jpg";
import ShopStudio from "./../../assets/shop-studio.jpg";

interface Props {
  prop2: string;
}

const Directory = ({ prop2 }: Props) => {
  return (
    <>
      <div>{prop2}</div>
      <div>
        <img
          style={{
            backgroundImage: `url(${ShopLive})`,
          }}
          alt="Shop Live Gear Image"
        />
      </div>
      <div>
      <img
          style={{
            backgroundImage: `url(${ShopStudio})`,
          }}
          alt="Shop Studio Gear Image"
        />      </div>
    </>
  );
};

export default Directory;
