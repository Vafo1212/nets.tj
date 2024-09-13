import React, { useState } from "react";
import "./Tarifs.scss";
import TarifsCards from "./TarifsCards/TarifsCards"; 

const Tarifs = ({ tarifsTitle, tarifCards,tarifIptvData,  tarifAdditionallyData,  tarifYearCards }) => {
  const [activeTitle, setActiveTitle] = useState(0);
  return (
    <div className="tarifs_container" id="tarifs">
      <div className="tarifs_block">
        <h1>Выберите тариф для подключения</h1>
        <div className="tarifs_title">
          {tarifsTitle?.map((e, index) => (
            <div className="tarifsTitle_text" key={index}>
              <p
                style={{ borderBottom: activeTitle === index && '2px solid #FF1749' }}
                onClick={() => setActiveTitle(index)}
              >
                {e.name}
              </p>
            </div>
          ))}
        </div>
        <div className="tarifs_item">
          <TarifsCards tarifCards={tarifCards} tarifIptvData={tarifIptvData}  tarifAdditionallyData={tarifAdditionallyData} activeTitle={activeTitle} tarifYearCards={tarifYearCards}/>
        </div>
      </div>
      
    </div>
  );
};

export default Tarifs;
