import React, { useState } from "react";
import "./HomeIptv.scss";
import arrowImg from "../../../Assets/Home/img/HomeEquipment/SVG.svg";
import img from "../../../Assets/Home/img/HomeIptv/Link (1).png";
import HomeIptvList from "./HomeIptvList/HomeIptvList";
import HomeIptvCard from "./HomeIptvCard/HomeIptvCard";
import MyButton from "../../../UI/MyButton/MyButton";
const HomeIptv = ({ IptvCannel }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="homeIptv_container">
      <div className="homeIptv_block">
        <div className="homeIptv_title">
          <h1>Интернет и IPTV от NETS</h1>
          <img src={arrowImg} alt="" />
        </div>
        <div className="homeIptv_item">
          <HomeIptvCard />
          {/* <img src={img} alt="" style={{width: '100%'}}/> */}
          <div className="homeIptvLists_block">
            {IptvCannel?.map((e, index) => (
              <div
                className="homeIptvLists_item"
                key={e.id}
                onClick={() => setActive(index)}
                style={{
                  boxShadow:
                    active === index && "0px 0px 16px 0px rgba(0, 0, 0, 0.25)",
                  borderRadius: active === index && "16px",
                  backgroundColor: active === index && "white",
                }}
              >
                <HomeIptvList
                  title={e.title}
                  subTitle={e.subTitle}
                  icon={e.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="homeIptv_btn">
          <a href="#homeContact">
            <MyButton name={"Подключить"} width={"200px"} height={"40px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeIptv;
