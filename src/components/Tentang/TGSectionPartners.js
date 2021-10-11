import React, { useEffect, useState } from "react";
import axios from "axios";
import useWindowDimensions from "../../hooks/useWindowDimentions";

const TGSectionPartners = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <div id="tg-partners">
        <div className="wrapper">
          <h1>Partners</h1>

          <div className="tg-partners-list">
            {props.partners
              .sort(function (a, b) {
                if (width < 576) {
                  return a.order_mobile - b.order_mobile;
                } else {
                  return a.order - b.order;
                }
              })
              .map((ptnr, i) => (
                <img src={ptnr.logo.url} alt="partner" key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGSectionPartners;
