import React, { useState, useEffect } from "react";
import axios from "axios";

const HPSectionTrivia = (props) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [textCta, setTextCta] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL + "/homepage")
      .then((res) => res.data)
      .then((data) => {
        setImage(data.trivia_section_image.url);
        setText1(data.trivia_section_text_1);
        setText2(data.trivia_section_text_2);
        setTextCta(data.trivia_section_text_cta);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <center id="trivia">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
          <span className="sr-only">Loading...</span>
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <div id="trivia">
          {/* <div className="line-white"></div> */}
          <img src={require("../../assets/img/shape37.png")} alt="shape37" className="shape37" />
          <img src={require("../../assets/img/shape38.png")} alt="shape38" className="shape38" />

          <div className="wrapper">
            <div className="row">
              <div className="col-lg-6 align-self-end left">
                <img src={image} alt="trivia-person" />
              </div>
              <div className="col-lg-6 m-auto right">
                <h1>{text1}</h1>

                <p>{text2}</p>

                <div className="cta-center">
                  <a href="/trivia" className="cta-trivia">
                    {textCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HPSectionTrivia;
