import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const HPSection4 = (props) => {
  const [loading, setLoading] = useState(true);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + "/homepage"),
        axios.get(process.env.REACT_APP_API_URL + "/partners?_sort=order:asc"),
      ])
      .then((res) => {
        setText1(res[0].data.text_partner_1);
        setText2(res[0].data.text_partner_2);
        setPartners(res[1].data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div>
        <center id="partner">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
          <span className="sr-only">Loading...</span>
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <div id="partner">
          <img src={require("../../assets/img/shape39.png")} alt="shape39" className="shape39" />

          <div className="wrapper">
            <h1>{text1}</h1>

            <p>{text2}</p>

            <Slider {...settings}>
              {partners.map((part) => (
                <div key={part.id}>
                  <img src={part.logo.url} alt={part.name} />
                </div>
              ))}
              {/* <div>
                <img src={require("../../assets/img/partner/AV.png")} alt="partner" />
              </div>
              <div>
                <img src={require("../../assets/img/partner/DPA.png")} alt="partner" />
              </div>
              <div>
                <img src={require("../../assets/img/partner/KAF.png")} alt="partner" />
              </div>
              <div>
                <img src={require("../../assets/img/partner/PermataBank.png")} alt="partner" />
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow">
      <img src={require("../../assets/img/partner/next2.png")} alt="next" onClick={onClick} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow">
      <img src={require("../../assets/img/partner/prev2.png")} alt="prev" onClick={onClick} />
    </div>
  );
};

export default HPSection4;
