import React from "react";

const TGSection3 = (props) => {
  return (
    <div>
      <div id="trivia-banner">
        {/* <img src={require("../../assets/img/shape27.png")} alt="shape27" className="shape27" /> */}
        <img src={require("../../assets/img/shape45.png")} alt="shape45" className="shape45" />

        {props.data.section_3_image && (
          <img src={props.data.section_3_image.url} alt="trivia-banner" className="visual" />
        )}

        <div className="wrapper">
          <div className="row parent">
            <div className="col-lg-6 left">
              <div></div>
            </div>
            <div className="col-lg-6 m-auto right">
              <h2>{props.data.section_3_text_1}</h2>

              <p>{props.data.section_3_text_2}</p>

              <a href="/trivia" className="cta-trivia">
                {props.data.section_3_text_cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGSection3;
