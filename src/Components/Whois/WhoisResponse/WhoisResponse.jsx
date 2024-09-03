import React, { useState } from "react";
import "./WhoisResponse.scss";
import { IoIosArrowDown } from "react-icons/io";

const WhoisResponse = ({data}) => {
  const [show, setShow] = useState(0);
  return (
    <div className="whoisResponse_container">
      <h1>Ответы на частые вопросы</h1>
      <div className="whoisResponse_block">
        {
          data?.map((e)=> 
          
        <div className="whoisResponse_item" key={e.id}>
          <div className="whoisResponseItem_title" onClick={()=> setShow(e.id)}>
            <h2>{e.title}</h2>
            <IoIosArrowDown className="whoisResponse_icon" style={{transform: show === e.id && "rotate(180deg)"}}/>
          </div>
          {show === e.id && (
            <div className="whoisResponseText_block">
              <p>
                {e.subTitle}
              </p>
            </div>
          )}
        </div>
          )
        }
       
      </div>
    </div>
  );
};

export default WhoisResponse;
