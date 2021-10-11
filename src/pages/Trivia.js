import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Trivia = (props) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [question_1, setQuestion_1] = useState("");
  const [question_2, setQuestion_2] = useState("");
  const [question_3, setQuestion_3] = useState("");
  const [question_4, setQuestion_4] = useState("");
  const [result, setResult] = useState([]);
  const [nextBtn, setNextBtn] = useState(false);
  const [current, setCurrent] = useState("intro");
  const [next, setNext] = useState("trivia");
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextQuestion, setNextQuestion] = useState({});

  useEffect(() => {
    setLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL + `/trivia-questions`)
      .then((res) => res.data)
      .then((data) => {
        setCurrentQuestion(data.trivia);
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

    if (current === "finish") {
      window.location.reload();
    } else {
      setCurrent(next);
      // setResult((prev) => {
      //   setResult([...prev, value]);
      // });

      let data = {};
      if (question_1 === "") {
        setQuestion_1(value);
        data = { ...data, question_1: value };
      } else {
        if (question_2 === "") {
          setQuestion_2(value);
          data = { ...data, question_1, question_2: value };
        } else {
          if (question_3 === "") {
            setQuestion_3(value);
            data = { ...data, question_1, question_2, question_3: value };
          } else {
            if (question_4 === "") {
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

        data = { ...data, result: nextQuestion.brand };

        axios.post(process.env.REACT_APP_API_URL + "/trivia-results", data);
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <Layout title="Trivia">
        <div id="trivia-page">
          <img src={require("../assets/img/shape32.png")} alt="shape32" className="shape32" />
          <img src={require("../assets/img/shape33.png")} alt="shape33" className="shape33" />

          <div className="wrapper">
            <div className="row">
              <div className="col-lg-8 m-auto">
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
                                      {currentQuestion.options && (
                                        <div>
                                          {currentQuestion.options.map((opt, i) => (
                                            <div
                                              className="trivia-option-item"
                                              onClick={(e) => {
                                                if (opt.next.options) {
                                                  setNextQuestion(opt.next);
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
                                              {opt.value}
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

                                    <div className="trivia-option" onClick={handleOptionClick}>
                                      {currentQuestion.options && (
                                        <div>
                                          {currentQuestion.options.map((opt, i) => (
                                            <div
                                              className="trivia-option-item"
                                              onClick={(e) => {
                                                setNextQuestion(opt.next);
                                                if (opt.next.options) {
                                                  setNext("trivia");
                                                  setValue(opt.value);
                                                } else {
                                                  setNext("finish");
                                                  setValue(opt.value);
                                                }
                                              }}
                                              key={i}
                                            >
                                              {opt.value}
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
                                    <h1 className="mb-3">
                                      Selamat!{" "}
                                      <img
                                        src={require("../assets/img/trivia-finish-cek.png")}
                                        alt="cek"
                                      />
                                    </h1>

                                    <img
                                      src={currentQuestion.img}
                                      alt={currentQuestion.brand}
                                      className="brand mb-5"
                                    />

                                    <div
                                      className="trivia-description"
                                      dangerouslySetInnerHTML={{
                                        __html: currentQuestion.description,
                                      }}
                                    ></div>
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

            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="d-flex justify-content-end align-items-center next-btn">
                  <button disabled={!nextBtn} onClick={handleNext}>
                    {current === "finish" ? "Kembali ke awal" : "Selanjutnya"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Trivia;
