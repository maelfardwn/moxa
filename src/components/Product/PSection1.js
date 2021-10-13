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
      <div id="banner" style={{background:'#D3E0FF'}}>
     
              <div>
                <animated.div
                  className="slider"
                  
                  style={{
                    ...props,
                    backgroundImage: props.image,
                  }}
                ></animated.div>
              </div>
        <div className="wrapper" style={{marginTop:'100px'}}>
          <div className="row">
            <div className="col-md-6" style={{marginTop:'30px'}}>
              <h1 style={{marginBottom:'10px'}}>{props.titleBanner}</h1>
              <h2>{props.subtitleBanner}</h2> 
            </div>        
            <div className="col-md-6" style={{backgroundImage: 'url(' + require('../../assets/img/arrowYellow.png') + ')',zIndex:'99',backgroundRepeat:'no-repeat'}}>
               
                    <img src={props.image} alt={props.altImage} style={{zIndex:'0', widows:'500px',height:'500px'}}/>
            </div>
    
          </div>

          <div style={{background:''}} className="slide-nav">

          </div>
        </div>
      </div>
    </div>
  );
};

export default PSection1;
