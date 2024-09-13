import React from "react";
import "./NewsItemDescription.scss";
const NewsItemDescription = ({text}) => {
  return (
    <div className="newsDescription_block" dangerouslySetInnerHTML={{ __html: text }} >
     
    </div>
  );
};

export default NewsItemDescription;
