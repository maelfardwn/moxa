import React, { useState, useEffect,useLayoutEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import ReactGA from "react-ga";
ReactGA.initialize("UA-175679937-1");

const HPSection1 = (props) => {
  const [index, setIndex] = useState(0);

  const { width } = useWindowDimensions();

  const transitions = useTransition(props.data[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  
  useEffect(
    () =>  setInterval(() => setIndex((state) => (state + 1) % (props.data.length+1)), 5000), 
    []
  );

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
      <div id="banner">
        {transitions.map(({ item, props, key }) => (
          <div>
            {width > 576 ? (
              <div>
                <animated.div
                  className="slider"
                  key={key}
                  style={{
                    ...props,
                    backgroundImage: `url(${item.image.url})`,
                  }}
                ></animated.div>
              </div>
            ) : (
              <div>
                <animated.div
                  className="slider"
                  key={key}
                  style={{
                    ...props,
                    backgroundImage: `url(${item.image.url})`,
                  }}
                ></animated.div>
              </div>
            )}
          </div>
        ))}

        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <h1>{props.data[index].text}</h1>
              <h2>{props.data[index].subtext}</h2>
              {props.data[index].download_button ? (
                <div>
                  <div className="download-btn">
                    <a
                      href={props.data[index].button_link}
                      target="_blank"
                      onClick={handleGoogleButton}
                    >
                      <img src={require("../../assets/img/gplay-btn.png")} alt="" />
                    </a>
                    <a
                      href={props.data[index].button_link}
                      target="_blank"
                      onClick={handleAppStoreButton}
                    >
                      <img src={require("../../assets/img/appstore-btn.png")} alt="" />
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <a className="cta-product" href={props.data[index].button_link}>
                    {props.data[index].button_text}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="slide-nav">
            {props.data.map((item, i) => (
              <div
                key={i}
                className={`nav-item ${index === i ? "slide-active" : ""}`}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPSection1;
