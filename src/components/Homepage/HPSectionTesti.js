import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import moment from "moment";

const HPSectionTesti = (props) => {
  const [loading, setLoading] = useState(true);
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL + "/testimonials")
      .then((res) => res.data)
      .then((data) => {
        setTesti(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "testi-slider",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
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
        <center id="testimonial">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
          <span className="sr-only">Loading...</span>
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <div id="testimonial">
          <img src={require("../../assets/img/shape36.png")} alt="shape36" className="shape36" />
          <img src={require("../../assets/img/shape35.png")} alt="shape35" className="shape35" />

          <div className="wrapper">
            <h1>Testimoni Pengguna Kami</h1>
            <p className="text-sub">
              Apa kata mereka mengenai moxa? <br />
              Yuk, bagikan pengalaman mudah kamu dalam memilih layanan keuangan
            </p>

            <div className="testi">
              <Slider {...settings}>
                {testi.map((v, i) => (
                  <div key={i}>
                    <div className="row mb-3 testi-info">
                      <div className="col-4">
                        <div
                          className="testi-photo rounded-circle"
                          style={{
                            background: `url(${
                              v.photo ? v.photo.url : require("../../assets/img/icon-testi.png")
                            }) no-repeat center center/cover`,
                          }}
                        />
                      </div>
                      <div className="col-8">
                        <div className="rating">
                          {[1, 2, 3, 4, 5].map((rate, i) => (
                            <div>
                              {rate <= v.rating ? (
                                <i className="fa fa-star" key={i}></i>
                              ) : (
                                <i className="fa fa-star-o" key={i}></i>
                              )}
                            </div>
                          ))}
                        </div>

                        <h3>{v.name}</h3>
                        <strong>{v.profession}</strong>
                      </div>
                    </div>

                    <p className="text-justify mb-3">{v.testimoni}</p>

                    {props.homeData.show_testimonial_date ? (
                      <small>
                        <i>{moment(v.date).format("LL")}</i>
                      </small>
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HPSectionTesti;
