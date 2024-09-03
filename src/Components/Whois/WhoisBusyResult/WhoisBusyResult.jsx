import React from "react";
import "./WhoisBusyResult.scss";
import MyButton from "../../../UI/MyButton/MyButton";

const WhoisBusyResult = ({ domainName, whoisResutl }) => {
  return (
    <div className="whoisBusyResul_container">
      <div className="whoisBusyResul_title">
        <h2>{domainName}.tj</h2>
        <MyButton
          width={"159px"}
          height={"48px"}
          name={"Домен занят"}
          grey={true}
          size={"16px"}
        />
      </div>
      <div className="whoisBusyResul_block">
        <div className="whoisBusyResul_item">
          <div className="whoisBusyResulDomains_title">
            <h4>Domain Name:</h4>
            {
         whoisResutl&&
            <p>{whoisResutl['domain name']}</p>
            }
          </div>
          <div className="whoisBusyResulDomains_block">
            {whoisResutl && Object.entries(whoisResutl)?.map(([key, value]) => (
              <div className="whoisBusyResulDomains_item" key={key}>
                <h4>{key}:</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoisBusyResult;