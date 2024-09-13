import React from "react";
import "./NewsItemTitle.scss";
import { formatDate } from "../../../Modules/GeneralModule/GeneralLogic";
const NewsItemTitle = ({title, date}) => {
  return (
    <div className="newsItemTitle_block">
      <h1>{title}</h1>
      <p>{formatDate(date)}</p>
    </div>
  );
};

export default NewsItemTitle;
