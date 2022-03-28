import React from "react";
import { useEffect, useState } from "react";
import "./Homepage.modules.scss";
import logo from "../../../ImgApp/banner_img_2.jfif";
import logo2 from "../../../ImgApp/banner_img_3.jfif";
import Slider from "../../../UI/organisms/Slider";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { ProductSelecto } from "../../../Store-Redux/Reducer";

const bannerItem = [
  {
    id: 1,
    text: "Nice little gifts",
    p: "for loved ones",
    img: logo,
  },
  {
    id: 2,
    text: "Nice little gifts",
    p: "for loved ones",
    img: logo2,
  },
];

const HomePage = () => {
  const data = useSelector(ProductSelecto);
  const New = data.filter((x) => x.new == "New");
  const Relevant = data.filter((x) => x.Relevant == "Relevant");
  const NewTex1 = "New";
  const NewTex2 = "Relevant";

  return (
    <div className="Home">
      <div className="Home_banner_1">
        <div className="banner">
          <div className="banner_list">
            <div className="banner_off">40% OFF</div>
            <p className="banner_text">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <Link to="/flowers">
              <div className="banner_button">
                <span>Shop now</span>
                <img
                  src="https://cassiopeia.store/svgs/line-right-arrow.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="Home_banner_2">
        {bannerItem.map((item) => (
          <div
            className="banner_list_2"
            style={{ backgroundImage: `url(${item.img})` }}
            key={item.id}
          >
            <div className="banner_list_item_2">
              <div className="banner_list-text">{item.text}</div>
              <p>{item.p}</p>
              <Link to="/flowers">
                <div className="banner_button_2">
                  <span>Shop now</span>
                  <img
                    src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Slider New={New} isRelevant={true} title={NewTex1} />
      </div>

      <div>
        <Slider New={Relevant} isRelevant={false} title={NewTex2} />
      </div>
    </div>
  );
};

export default HomePage;
