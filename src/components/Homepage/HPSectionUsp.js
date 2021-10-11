import React, { useState } from "react";
import LineTo, { SteppedLineTo } from "react-lineto";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import Slider from "react-slick";

const usp = [
  {
    text: "Wide Array of Financial Product Selections",
    icon: "icon1.png",
    icon2: "icon1-active.png",
    desc:
      "moxa memiliki lebih dari 10 pilihan produk finansial, mulai dari Pembiayaan Mobil, Pembiayaan Motor, Asuransi Kesehatan, Asuransi Jiwa, Pembiayaan Alat Berat, Pinjaman Multiguna, Pembiayaan Perjalanan Umroh, dan banyak lagi!",
  },
  {
    text: "Friendly UX with Conversational UI",
    icon: "icon2.png",
    icon2: "icon2-active.png",
    desc:
      "moxa di desain menggunakan pendekatan yang berfokus pada <i>user-centric</i>, yang menghasilkan sebuah <i>User Experience</i> yang sederhana, intuitif, dan mudah dipahami. Kami memiliki UI Berbasis Percakapan yang memungkinkan aplikasi berinteraksi untuk menemukan apa yang anda inginkan melalui dialog interaktif.",
  },
  {
    text: "Trusted Astra Brand in One Ecosystem",
    icon: "icon3.png",
    icon2: "icon3-active.png",
    desc:
      "Tidak seperti agregator finansial yang hanya mengumpulkan beragam produk dari perusahaan - perusahaan berbeda, moxa bagian dari Astra Financial, dan semua produk yang ditawarkan membawa reputasi dari dari Astra yang sudah ternama sebagai salah satu bagian dari Unit Bisnis Astra Financial (TAF, ACC, FIFGROUP, Astra Life, dan lainya).",
  },
];

const HpSectionUsp = (props) => {
  const [active, setActive] = useState(0);

  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    infinite: true,
    centerMode: true,
    centerPadding: "6%",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "usp-slider",
    afterChange: (current) => setActive(current),
  };

  return (
    <div>
      <div id="usp">
        <h1>Kenapa harus moxa?</h1>

        {width < 768 ? (
          <div>
            <div className="row usp-mobile">
              <div className="col">
                <Slider {...settings}>
                  {usp.map((x, i) => (
                    <div className={`usp-comp ${active === i ? "usp-active" : ""}`}>
                      <h3 onClick={() => setActive(i)}>{x.text}</h3>

                      <div className="usp-item">
                        <div className="usp-icon">
                          <img
                            src={require(`../../assets/img/usp/${active === i ? x.icon2 : x.icon}`)}
                            alt="icon"
                            onClick={() => setActive(i)}
                            className={i}
                          />

                          <img
                            src={require("../../assets/img/shape51.png")}
                            alt="line"
                            className="usp-line"
                          />
                        </div>
                      </div>

                      <div className={`usp-desc`}>
                        <div dangerouslySetInnerHTML={{ __html: usp[i].desc }}></div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="wrapper">
              <div className="row">
                {usp.map((x, i) => (
                  <div className={`col-4 usp-comp ${active === i ? "usp-active" : ""}`} key={i}>
                    <h3 onClick={() => setActive(i)}>{x.text}</h3>

                    <div className="usp-item">
                      <div className="usp-icon">
                        <img
                          src={require(`../../assets/img/usp/${active === i ? x.icon2 : x.icon}`)}
                          alt="icon"
                          onClick={() => setActive(i)}
                          className={i}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="usp-desc usp-desc-active"
                dangerouslySetInnerHTML={{ __html: usp[active].desc }}
              ></div>

              {active === 1 ? (
                <LineTo from={active} to="usp-desc-active" borderColor="#04bee6" borderWidth="2" />
              ) : (
                <SteppedLineTo
                  from={active}
                  to="usp-desc-active"
                  orientation="v"
                  borderColor="#04bee6"
                  borderWidth="2"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow">
      <img src={require("../../assets/img/usp/next-arrow.png")} alt="next" onClick={onClick} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow">
      <img src={require("../../assets/img/usp/prev-arrow.png")} alt="prev" onClick={onClick} />
    </div>
  );
};

export default HpSectionUsp;
