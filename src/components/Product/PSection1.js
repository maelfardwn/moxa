import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import ReactGA from "react-ga";
import Helm from '../../assets/img/helm.png'
ReactGA.initialize("UA-175679937-1");

const PSection1 = (props) => {
  
  const handleGoogleButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked Google Play Store",
    });
  };

  const handleAppStoreButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked IOS App Store",
    });
  };

  return (
    <div>
      <div id="banner" style={{backgroundImage:`url(${props.image})`,backgroundSize:'cover',width:'auto'}}>
     
      
        <div className="wrapper" style={{marginTop:'100px'}}>
          <div className="row">
            <div className="col-md-8" >
              <h1 style={{marginBottom:'10px'}}>{props.titleBanner}</h1>
              <h2>{props.subtitleBanner}</h2> 
            </div>        
            
    
          </div>

        </div>
      </div>
    </div>
  );
};

export default PSection1;
