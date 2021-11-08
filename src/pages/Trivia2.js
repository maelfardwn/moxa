import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import ReactGA from "react-ga";
import LayoutProduct from "../components/Layout/LayoutProduct";

const Trivia = (props) => {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [q1, setQ1] = useState({});
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState([]);
  const [q4, setQ4] = useState([]);
  const [q5, setQ5] = useState([]);

  const [value, setValue] = useState("");
  const [question_1, setQuestion_1] = useState("");
  const [question_2, setQuestion_2] = useState("");
  const [question_3, setQuestion_3] = useState("");
  const [question_4, setQuestion_4] = useState("");
  const [icon, setIcon] = useState("");
  const [newStyle, setNewStyle] = useState(false);
  const [newStyle2, setNewStyle2] = useState(false);
  const [nextBtn, setNextBtn] = useState(false);
  const [current, setCurrent] = useState("intro");
  const [next, setNext] = useState("trivia");
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextQuestion, setNextQuestion] = useState({});
  const [downloadLink, setDownloadLink] = useState('');


  useEffect(() => {
    setLoading(true);

    axios.get(`https://dev.moxa.id/cms/home-banners?_sort=order:asc`)
    .then((res) => {
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });
    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + `/trivia-1st-questions`),
        axios.get(process.env.REACT_APP_API_URL + `/trivia-2nd-questions`),
        axios.get(process.env.REACT_APP_API_URL + `/trivia-3rd-questions`),
        axios.get(process.env.REACT_APP_API_URL + `/trivia-4th-questions`),
        axios.get(process.env.REACT_APP_API_URL + `/trivia-5th-questions`),
      ])
      .then((res) => {
        setQ1(res[0].data);
        setQ2(res[1].data);
        setQ3(res[2].data);
        setQ4(res[3].data);
        setQ5(res[4].data);
        // console.log(data);
        setCurrentQuestion(res[0].data);
        setStep(1);
        setLoading(false);
      })
      .catch((err) => console.log);
  }, []);

  const handleOptionClick = (e) => {
    if (e.target.className === "trivia-option-item") {
      const optEl = e.target.parentNode.childNodes;

      for (let i = 0; i < optEl.length; i++) {
        optEl[i].classList.remove("trivia-active");
      }

      e.target.classList.add("trivia-active");
      setNextBtn(true);
    }
  };

  const handleNext = () => {
    setNextBtn(false);
    setLoading(true);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    if (current === "finish") {
      window.location.reload();
    } else {
      setCurrent(next);
      if (nextQuestion.option) {
        const tes = nextQuestion.option.filter((x) => x.icon);

        if (tes.length > 0) {
          if (tes[0].icon.url.split(".").pop().toLowerCase() === "png") {
            setNewStyle(true);
            setNewStyle2(false);
          } else {
            setNewStyle2(true);
            setNewStyle(false);
          }
        } else {
          setNewStyle2(false);
          setNewStyle(false);
        }
      }
      // setResult((prev) => {
      //   setResult([...prev, value]);
      // });

      let data = {};
      if (question_1 === "") {
        setQuestion_1(value);
        setStep(2);
        data = { ...data, question_1: value };
      } else {
        if (question_2 === "") {
          setQuestion_2(value);
          setStep(3);
          data = { ...data, question_1, question_2: value };
        } else {
          if (question_3 === "") {
            setQuestion_3(value);
            setStep(4);
            data = { ...data, question_1, question_2, question_3: value };
          } else {
            if (question_4 === "") {
              setStep(5);
              setQuestion_4(value);
              data = { ...data, question_1, question_2, question_3, question_4: value };
            }
          }
        }
      }

      setCurrentQuestion(nextQuestion);
      setNextQuestion({});

      // reset active option
      const optionItem = document.querySelectorAll(".trivia-option-item");
      // console.log(optionItem);
      for (let i = 0; i < 9; i++) {
        if (optionItem[i]) {
          optionItem[i].classList.remove("trivia-active");
        }
      }

      if (next === "finish") {
        setNextBtn(true);

        // const data = {
        //   question_1: question_1,
        //   question_2: question_2,
        //   question_3: question_3,
        //   question_4: question_4,
        //   result: nextQuestion.brand,
        // };

        data = { ...data, result: nextQuestion.finish[0].brand };

        axios.post(process.env.REACT_APP_API_URL + "/trivia-results", data);
      }
    }

    setLoading(false);
  };

  const handleGoogleButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked Google Play Button From Trivia",
    });
  };

  const handleAppStoreButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked IOS App Store Button From Trivia",
    });
  };

  return (
    <div>
      <LayoutProduct downloadLink={downloadLink} title="Trivia">
        <div id="trivia-page">
          <img src={require("../assets/img/shape34.png")} alt="shape34" className="shape34" />
          <img src={require("../assets/img/shape48.png")} alt="shape48" className="shape48" />
          <img src={require("../assets/img/shape49.png")} alt="shape49" className="shape49" />

          <div className="wrapper">
            <div className="row">
              <div className={current === "finish" ? "col-lg-12" : "col-lg-9 m-auto"}>
                <div className="trivia-quiz">
                  {loading ? (
                    <div>
                      <center>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-5"></i>
                        <span className="sr-only">Loading...</span>
                      </center>
                    </div>
                  ) : (
                    <div>
                      {
                        {
                          intro: (
                            <div>
                              {loading ? (
                                <div>
                                  <center>
                                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-5"></i>
                                    <span className="sr-only">Loading...</span>
                                  </center>
                                </div>
                              ) : (
                                <div>
                                  <div className="q1">
                                    <p
                                      className="text-intro-1"
                                      dangerouslySetInnerHTML={{ __html: currentQuestion.text }}
                                    ></p>

                                    <h5
                                      dangerouslySetInnerHTML={{ __html: currentQuestion.subtext }}
                                    ></h5>

                                    <div className="trivia-option" onClick={handleOptionClick}>
                                      {currentQuestion.option && (
                                        <div>
                                          {currentQuestion.option.map((opt, i) => (
                                            <div
                                              className="trivia-option-item"
                                              onClick={() => {
                                                const x = q2.find((y) => y.id === opt.next.id);
                                                if (opt.icon) {
                                                  if (
                                                    opt.icon.url.split(".").pop().toLowerCase() ===
                                                    "png"
                                                  ) {
                                                    setIcon(opt.icon.url);
                                                  }
                                                }

                                                if (!x.finish[0]) {
                                                  setNextQuestion(x);
                                                  setNext("trivia");
                                                  setValue(opt.value);
                                                } else {
                                                  setNextQuestion({});
                                                  setNext("finish");
                                                  setValue(opt.value);
                                                }
                                              }}
                                              key={i}
                                            >
                                              {opt.icon ? (
                                                <img src={opt.icon.url} alt="icon" />
                                              ) : null}
                                              <div>{opt.value}</div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ),
                          trivia: (
                            <div>
                              {loading ? (
                                <div>
                                  <center>
                                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-5"></i>
                                    <span className="sr-only">Loading...</span>
                                  </center>
                                </div>
                              ) : (
                                <div>
                                  <div className="q2">
                                    <h1
                                      dangerouslySetInnerHTML={{ __html: currentQuestion.text }}
                                    ></h1>

                                    <p
                                      className="text-intro-1"
                                      dangerouslySetInnerHTML={{ __html: currentQuestion.subtext }}
                                    ></p>

                                    <div
                                      className={`trivia-option ${
                                        newStyle
                                          ? "style-option2"
                                          : newStyle2
                                          ? "style-option2b"
                                          : null
                                      }`}
                                      onClick={handleOptionClick}
                                    >
                                      {currentQuestion.option && (
                                        <div>
                                          {currentQuestion.option.map((opt, i) => (
                                            <div
                                              className="trivia-option-item"
                                              onClick={(e) => {
                                                if (opt.icon) {
                                                  if (
                                                    opt.icon.url.split(".").pop().toLowerCase() ===
                                                    "png"
                                                  ) {
                                                    setIcon(opt.icon.url);
                                                  }
                                                }

                                                let x = [];

                                                if (step === 2) {
                                                  x = q3.find((y) => y.id === opt.next.id);
                                                } else if (step === 3) {
                                                  x = q4.find((y) => y.id === opt.next.id);
                                                } else if (step === 4) {
                                                  x = q5.find((y) => y.id === opt.next.id);
                                                }

                                                setNextQuestion(x);
                                                if (!x.finish[0]) {
                                                  setNext("trivia");
                                                  setValue(opt.value);
                                                } else {
                                                  setNext("finish");
                                                  setValue(opt.value);
                                                }
                                              }}
                                              key={i}
                                            >
                                              {opt.icon ? (
                                                <img src={opt.icon.url} alt="icon" />
                                              ) : null}
                                              <div>{opt.value}</div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ),
                          finish: (
                            <div>
                              {loading ? (
                                <div>
                                  <center>
                                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-5"></i>
                                    <span className="sr-only">Loading...</span>
                                  </center>
                                </div>
                              ) : (
                                <div>
                                  <div className="q3">
                                    {/* <h1 className="mb-3">
                                      Selamat!{" "}
                                      <img
                                        src={require("../assets/img/trivia-finish-cek.png")}
                                        alt="cek"
                                      />
                                    </h1>

                                    <img
                                      src={
                                        currentQuestion.finish.length !== 0
                                          ? currentQuestion.finish[0].img.url
                                          : null
                                      }
                                      alt={
                                        currentQuestion.finish.length !== 0
                                          ? currentQuestion.finish[0].brand
                                          : null
                                      }
                                      className="brand mb-5"
                                    />

                                    <div
                                      className="trivia-description"
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          currentQuestion.finish.length !== 0
                                            ? currentQuestion.finish[0].descriptions
                                            : "",
                                      }}
                                    ></div> */}

                                    <div className="row">
                                      <div className="col-lg-9">
                                        <div className="finish-left">
                                          <img
                                            src={require("../assets/img/shape50.png")}
                                            alt="shape50"
                                            className="shape50"
                                          />

                                          <div className="row" style={{ height: "100%" }}>
                                            <div className="col-lg-4">
                                              <img
                                                className="finish-product-image"
                                                src={
                                                  currentQuestion.finish.length !== 0
                                                    ? currentQuestion.finish[0].product
                                                      ? currentQuestion.finish[0].product.url
                                                      : ""
                                                    : ""
                                                }
                                                alt="car"
                                              />
                                            </div>

                                            <div className="col-lg-8">
                                              <div
                                                className="finish-description"
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    currentQuestion.finish.length !== 0
                                                      ? currentQuestion.finish[0].descriptions
                                                      : "",
                                                }}
                                              ></div>

                                              <div className="finish-footer">
                                                <div className="row">
                                                  <div className="col-sm-6">
                                                    <p>
                                                      {currentQuestion.finish.length !== 0
                                                        ? currentQuestion.finish[0].last_text
                                                        : ""}
                                                    </p>
                                                  </div>

                                                  <div className="col-sm-6">
                                                    <img
                                                      src={
                                                        currentQuestion.finish.length !== 0
                                                          ? currentQuestion.finish[0].img.url
                                                          : null
                                                      }
                                                      alt={
                                                        currentQuestion.finish.length !== 0
                                                          ? currentQuestion.finish[0].brand
                                                          : null
                                                      }
                                                      className="finish-brand"
                                                    />
                                                  </div>
                                                </div>

                                                <button disabled={!nextBtn} onClick={handleNext}>
                                                  <img src={icon} alt="icon" />
                                                  <div>Coba lagi</div>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-3">
                                        <div className="finish-right">
                                          <p>
                                            Penuhi semua kebutuhanmu untuk hidup yang ideal ada di
                                            sini. Yuk, download aplikasi Moxa sekarang!
                                          </p>

                                          <div className="download-btn">
                                            <a
                                              href="https://moxa.onelink.me/VqhM/webandroidcta"
                                              target="_blank"
                                              onClick={handleGoogleButton}
                                            >
                                              <img
                                                src={require("../assets/img/gplay-btn.png")}
                                                alt=""
                                              />
                                            </a>
                                            <a
                                              href="https://moxa.onelink.me/VqhM/webandroidcta"
                                              target="_blank"
                                              onClick={handleAppStoreButton}
                                            >
                                              <img
                                                src={require("../assets/img/appstore-btn.png")}
                                                alt=""
                                              />
                                            </a>
                                          </div>

                                          <img
                                            src={require("../assets/img/about/phone-1.png")}
                                            alt="app-img"
                                            className="app-img"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ),
                        }[current]
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>

            {current !== "finish" ? (
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <div className="d-flex justify-content-center align-items-center next-btn">
                    <button disabled={!nextBtn} onClick={handleNext}>
                      {current === "finish" ? "Kembali ke awal" : "Selanjutnya"}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </LayoutProduct>
    </div>
  );
};

export default Trivia;
