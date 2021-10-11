import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Accordion,
  Button,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";

import "../assets/styles/scss/ck-content.css";

import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact";

const FaqNew = (props) => {
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState({
    umum: [],
    akun: [],
    aplikasi: [],
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/faqs")
      .then((res) => res.data)
      .then((data) => {
        const umum = data.filter((v) => v.about === "Umum");
        const akun = data.filter((v) => v.about === "Akun");
        const aplikasi = data.filter((v) => v.about === "Proses_Pengajuan_Aplikasi");

        setFaqs((state) => {
          return {
            ...state,
            umum,
            akun,
            aplikasi,
          };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Layout title="FAQ">
        <div id="faq">
          <div className="wrapper">
            <h1 className="title">Punya Pertanyaan Lebih Banyak?</h1>
            <h1 className="title">Temukan Disini</h1>

            {/* <Row className="mt-3">
              <Col md={8} className="m-auto">
                <div className="faq-search">
                  <input type="text" placeholder="Ketik disini..." />
                  <img src={require("../assets/img/search-btn.png")} alt="search-btn" />
                </div>
              </Col>
            </Row> */}

            <Row className="mt-3">
              <Col md={8} className="m-auto">
                <Accordion>
                  <h5 className="my-3 text-center">Umum</h5>

                  {faqs.umum.length > 0 && (
                    <div>
                      {faqs.umum.map((v) => (
                        <Card key={v.id}>
                          <Card.Header>
                            <span>{v.question}</span>
                            <ContextAwareToggle eventKey={v.id}></ContextAwareToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={v.id}>
                            <Card.Body>
                              <div
                                className="ck-content"
                                dangerouslySetInnerHTML={{ __html: v.answer }}
                              ></div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </div>
                  )}

                  <h5 className="my-3 text-center">Akun</h5>

                  {faqs.akun.length > 0 && (
                    <div>
                      {faqs.akun.map((v) => (
                        <Card key={v.id}>
                          <Card.Header>
                            <span>{v.question}</span>
                            <ContextAwareToggle eventKey={v.id}></ContextAwareToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={v.id}>
                            <Card.Body>
                              <div
                                className="ck-content"
                                dangerouslySetInnerHTML={{ __html: v.answer }}
                              ></div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </div>
                  )}

                  <h5 className="my-3 text-center">Proses Pengajuan Aplikasi</h5>

                  {faqs.aplikasi.length > 0 && (
                    <div>
                      {faqs.aplikasi.map((v) => (
                        <Card key={v.id}>
                          <Card.Header>
                            <span>{v.question}</span>
                            <ContextAwareToggle eventKey={v.id}></ContextAwareToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={v.id}>
                            <Card.Body>
                              <div
                                className="ck-content"
                                dangerouslySetInnerHTML={{ __html: v.answer }}
                              ></div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </div>
                  )}
                </Accordion>
              </Col>
            </Row>
          </div>
        </div>

        <Contact />
      </Layout>
    </div>
  );
};

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      className={`circle-plus float-right ${isCurrentEventKey ? "opened" : "closed"}`}
      onClick={decoratedOnClick}
    >
      <div className="circle">
        <div className="horizontal"></div>
        <div className="vertical"></div>
      </div>
    </div>
  );
}

export default FaqNew;
