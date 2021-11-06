import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import moment from "moment";
import "../assets/styles/scss/ck-content.css";
import LayoutProduct from "../components/Layout/LayoutProduct";

const NewsDetail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const [downloadLink, setDownloadLink] = useState('');
  
  useEffect(() => {
    setLoading(true);
    let keyword = "";

    axios.get(`https://moxa-cms.shared.zali.pro/home-banners?_sort=order:asc`)
    .then((res) => {
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });

    axios
      .get(`https://moxa-cms.shared.zali.pro/articles/${props.match.params.id}`)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setLoading(false);
        keyword = data.categories[0].category || "berita";

        axios
          .get(`https://moxa-cms.shared.zali.pro/articles?_limit=10&categories.category_contains=${keyword}`
          )
          .then((res) => res.data)
          .then((data) => {
            let result = data;

            for (let i = result.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * i);
              const temp = result[i];
              result[i] = result[j];
              result[j] = temp;
            }

            setRelated(result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        keyword = "berita";
        console.log(err);
        setLoading(false);

        axios
          .get(`https://moxa-cms.shared.zali.pro/articles?_limit=10&categories.category_contains=${keyword}`
          )
          .then((res) => res.data)
          .then((data) => {
            let result = data;

            for (let i = result.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * i);
              const temp = result[i];
              result[i] = result[j];
              result[j] = temp;
            }

            setRelated([result[0], result[1], result[2]]);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 my-5">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
        <LayoutProduct downloadLink={downloadLink}
          title={data.title}
          descriptions={data.meta_descriptions}
          keywords={data.meta_keywords}
          image={data.cover.url}
          url={'https://moxa-cms.shared.zali.pro/' + props.location.pathname}
        >
          <div id="berita-detail">
            <div className="wrapper">
              {data.title ? (
                <div>
                  <div className="news-head">
                    <div className="news-breadcrumb">
                      <a href="/">Home</a>
                      <span>{">"}</span>
                      <a href="/artikel">Artikel</a>
                      <span>{">"}</span>
                      <span className="current">{data.title}</span>
                    </div>

                    <h1 className="news-title">{data.title}</h1>

                    <div className="news-date">
                      {moment(data.created_at).format("dddd") +
                        ", " +
                        moment(data.created_at).format("LL")}
                    </div>
                  </div>

                  <div
                    className="cover"
                    style={{
                      background: `url(${data.cover.url}) center center /cover`,
                    }}
                  >
                    <div className="news-category">
                      {data.categories.map((dt, i) => (
                        <div className="cat-item" key={i}>
                          {dt.category}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="news-content ck-content"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></div>

                  <div className="news-tags">
                    <span>Tags:</span>
                    {data.tags.map((tag, i) => (
                      <div className="tag-item" key={i}>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <h2 className="text-center my-5">Halaman tidak ditemukan</h2>
              )}

              <div className="news-bottom">
                <h5>Artikel yang lain:</h5>

                <div className="related-news row">
                  {related.map((rel, i) => (
                    <div>
                      {i < 3 && (
                        <div>
                          <div className="related-item col-md-6 col-lg-4" key={i}>
                            <a href={`/artikel/${rel.id}`} className="cover-wrapper">
                              <div
                                className="cover"
                                style={{
                                  background: `#04325f url(${rel.cover.url}) center center/cover`,
                                }}
                              ></div>
                            </a>
                            {rel.tags.length > 1 ? (
                              <div>
                                {rel.tags.map((cat, i) => (
                                  <div className="t-cat" key={i}>
                                    {rel.tags.length - 1 === i ? (
                                      `${cat.name}`
                                    ) : (
                                      <div>{`${cat.name},`}&nbsp;</div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div>
                                <div className="t-cat">{rel.tags[0].name}</div>
                              </div>
                            )}
                            <a href={`/artikel/${rel.id}`}>
                              <h3>{rel.title}</h3>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </LayoutProduct>
      </div>
    );
  }
};

export default NewsDetail;
