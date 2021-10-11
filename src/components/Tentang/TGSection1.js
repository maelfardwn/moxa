import React from "react";
import ReactGA from "react-ga";
import Slider from "react-slick";

const TGSection1 = (props) => {
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

  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "phones-slider",
  };

  return (
    <div>
      <div id="about-top">
        <img src={require("../../assets/img/shape42.png")} alt="shape42" className="shape42" />

        <div className="wrapper">
          <div class="row">
            <div class="col-md-7">
              <h1>{props.data.section_1_text_1}</h1>
              <div
                className="sub-title"
                dangerouslySetInnerHTML={{ __html: props.data.section_1_text_2 }}
              ></div>

              <div className="download-btn">
                <a
                  href="https://moxa.onelink.me/VqhM/webandroidcta"
                  target="_blank"
                  onClick={handleGoogleButton}
                >
                  <img src={require("../../assets/img/gplay-btn.png")} alt="" />
                </a>
                <a
                  href="https://moxa.onelink.me/VqhM/webandroidcta"
                  target="_blank"
                  onClick={handleAppStoreButton}
                >
                  <img src={require("../../assets/img/appstore-btn.png")} alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-5">
              <div className="phone-slider">
                <Slider {...settings}>
                  <img src={require("../../assets/img/about/phone-3.png")} alt="preview moxa" />
                  <img src={require("../../assets/img/about/phone-2.png")} alt="preview moxa" />
                  <img src={require("../../assets/img/about/phone-1.png")} alt="preview moxa" />
                  <img src={require("../../assets/img/about/phone-4.png")} alt="preview moxa" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGSection1;
