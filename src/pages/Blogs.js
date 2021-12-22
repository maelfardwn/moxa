import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimentions";
import axios from "axios";
import moment from "moment";
import queryString from "query-string";
import Pagination from "react-js-pagination";

import Layout from "../components/Layout/Layout";
import LayoutProduct from "../components/Layout/LayoutProduct";

const Blogs = (props) => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState({
    t: "",
    tgl: "created_at:desc",
    tag: "",
    page: 1,
  });
 
  const [openTgl, setOpenTgl] = useState(false);
  const [openKategori, setOpenKategori] = useState(false);
  const [tanggal, setTanggal] = useState("Tanggal Baru");
  const [kategori, setKategori] = useState("Semua kategori");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [downloadLink, setDownloadLink] = useState('');
  const { width } = useWindowDimensions();

  useEffect(() => {
    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + "/tags?articles_null=0&categories.category=Blog"),
        axios.get(process.env.REACT_APP_API_URL + "/articles/count"),
       
      ])
      .then(
        
        axios.spread((tags, count) => {
          setCategories(tags.data);
          const queries = queryString.parse(props.location.search);

          if (queries.tag) {
            const cat = tags.data.filter((c) => c.id === Number(queries.tag));
            // return console.log(cat);
            const cat_name = cat[0].name;
            setKategori(cat_name);
          }
        })
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`)
    .then((res) => {
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });
    const queries = queryString.parse(props.location.search);

    if (queries.t) {
      setSearch(queries.t);
    }

    if (queries.tgl) {
      if (queries.tgl === "created_at:asc") {
        setTanggal("Tanggal Lama");
      }
      if (queries.tgl === "created_at:desc") {
        setTanggal("Tanggal Baru");
      }
    }

    if (queries.page) {
      setPage(queries.page);
    }

    setQuery((v) => {
      return {
        ...v,
        ...queries,
      };
    });
  }, []);

  // Fetch Articles
  useEffect(() => {
    setLoading(true);

    const queries = queryString.parse(props.location.search);

    const newQuery = {
      _sort: queries.tgl || "created_at:desc",
      title_contains: queries.t,
      "tags.id": queries.tag || undefined,
      _start: (queries.page - 1) * perPage || 0,
    };

    const params = queryString.stringify(newQuery);

    // console.log(params);

    axios
      .get(
        process.env.REACT_APP_API_URL +
          `/articles?_limit=${perPage}&categories.category=Blog&${params}`
      )
      .then((res) => res.data)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    const newQuery2 = {
      _sort: queries.tgl || "created_at:desc",
      title_contains: queries.t,
      "tags.id": queries.tag || undefined,
      _start: 0,
    };

    const params2 = queryString.stringify(newQuery2);

    axios
      .get(process.env.REACT_APP_API_URL + `/articles?categories.category=Blog&${params2}`)
      .then((res) => res.data)
      .then((data) => {
        setTotalData(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTglClick = (e) => {
    setOpenTgl(!openTgl);

    // console.log(e.target.className);
    if (e.target.className === "option") {
      if (e.target.innerHTML === "Tanggal Lama") {
        let queries = query;
        queries.tgl = "created_at:asc";
        const params = queryString.stringify(queries);

        window.location.href = `/artikel/blog?${params}`;
      }
      if (e.target.innerHTML === "Tanggal Baru") {
        let queries = query;
        queries.tgl = "created_at:desc";
        const params = queryString.stringify(queries);

        window.location.href = `/artikel/blog?${params}`;
      }
    }
  };
  const handleTglMobile = (e) => {
    if (e.target.className === "option") {
      // console.log(e.target.parentNode.childNodes);
      const optEl = e.target.parentNode.childNodes;

      for (let i = 0; i < optEl.length; i++) {
        optEl[i].classList.remove("active-opt-m");
      }

      if (e.target.innerHTML === "Tanggal Lama") {
        let queries = query;
        queries.tgl = "created_at:asc";
        const params = queryString.stringify(queries);

        window.location.href = `/artikel/blog?${params}`;
      }
      if (e.target.innerHTML === "Tanggal Baru") {
        let queries = query;
        queries.tgl = "created_at:desc";
        const params = queryString.stringify(queries);

        window.location.href = `/artikel/blog?${params}`;
      }
      e.target.classList.add("active-opt-m");
    }
  };

  const handleKategoriClick = (e) => {
    setOpenKategori(!openKategori);

    // if (e.target.className === "option") {
    //   let queries = query;
    //   queries.tag = e.target.innerHTML.toLowerCase();
    //   const params = queryString.stringify(queries);

    //   window.location.href = `/artikel/blog?${params}`;
    // }
  };
  // const handleKategoriMobile = (e) => {
  // if (e.target.className === "option") {
  //   let queries = query;
  //   queries.tag = e.target.innerHTML.toLowerCase();
  //   const params = queryString.stringify(queries);
  //   window.location.href = `/artikel/blog?${params}`;
  // }
  // };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      let queries = query;
      const params = queryString.stringify(queries);

      window.location.href = `/artikel/blog?${params}`;
    }
  };

  const handlePageChange = (pageNumber) => {
    let queries = query;
    queries.page = pageNumber;
    const params = queryString.stringify(queries);

    window.location.href = `/artikel/blog?${params}`;
  };

  return (
    <>
      <LayoutProduct downloadLink={downloadLink} title="Blog">
        <div id="berita">
          <div className="news-top">
            <img src={require("../assets/img/shape46.png")} alt="shape46" className="shape46" />
            <img src={require("../assets/img/shape47.png")} alt="shape47" className="shape47" />

            <div className="wrapper">
              <h1>Blog</h1>

              <p>
                Temukan tentang berita terkini mengenai produk, layanan terbaru, media release,
                event, promosi dan informasi lainnya dari Moxa yang dapat membantu kamu di dalam
                perkembangan terkini seputar topik keuangan.
              </p>

              <div className="news-handling">
                <div className="search">
                  <label htmlFor="search">Cari blog:</label>
                  <input
                    type="text"
                    placeholder={
                      width < 768
                        ? "Topik apa yang anda cari?"
                        : "Beritahu kami topik apa yang anda cari?"
                    }
                    id="search"
                    value={search}
                    onChange={(e) => {
                      const text = e.target.value;
                      setSearch(e.target.value);
                      setQuery((v) => {
                        return {
                          ...v,
                          t: text,
                        };
                      });
                    }}
                    onKeyUp={handleSearchEnter}
                  />
                </div>

                {width < 992 ? (
                  <>
                    <div className="sort-m">
                      <label>Sort by:</label>

                      <div className="select-m" onClick={handleTglMobile}>
                        <div
                          className={tanggal === "Tanggal Baru" ? "option active-opt-m" : "option"}
                        >
                          Tanggal Baru
                        </div>
                        <div
                          className={tanggal === "Tanggal Lama" ? "option active-opt-m" : "option"}
                        >
                          Tanggal Lama
                        </div>
                      </div>
                    </div>

                    <div className="category-m">
                      {categories.map((cate, i) => (
                        <div
                          className={
                            cate.id === Number(query.tag) ? `option active-opt-m` : "option"
                          }
                          onClick={(e) => {
                            let queries = query;
                            if (queries.tag == cate.id) {
                              queries.tag = "";
                              const params = queryString.stringify(queries);

                              window.location.href = `/artikel/berita?${params}`;
                            } else {
                              queries.tag = cate.id;
                              const params = queryString.stringify(queries);

                              window.location.href = `/artikel/blog?${params}`;
                            }
                          }}
                          key={i}
                        >
                          {cate.name}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="sort">
                      <label>Sort by:</label>

                      <div className="select" onClick={handleTglClick}>
                        <div className="placeholder">{tanggal}</div>

                        <div className={`options ${openTgl ? "open-opt" : null}`}>
                          <div className="option">Tanggal Baru</div>
                          <div className="option">Tanggal Lama</div>
                        </div>
                      </div>
                    </div>

                    <div className="select" onClick={handleKategoriClick}>
                      <div
                        className="placeholder"
                        dangerouslySetInnerHTML={{ __html: kategori }}
                      ></div>

                      <div className={`options ${openKategori ? "open-opt" : null}`}>
                        {categories.map((cate) => (
                          <div
                            className="option"
                            onClick={(e) => {
                              let queries = query;
                              queries.tag = cate.id;
                              const params = queryString.stringify(queries);

                              window.location.href = `/artikel/blog?${params}`;
                            }}
                            key={cate.id}
                          >
                            {cate.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="news-wrapper">
            <div className="wrapper">
              <div className="news-list row">
                {articles.length > 0 ? (
                  <>
                    {articles.map((art, i) => (
                      <div className="news-item col-md-6 col-lg-4" key={i}>
                        <a href={`/artikel/${art.id}`} className="cover-wrapper">
                          <div
                            className="cover"
                            style={{
                              background: `#04325f url(${art.cover.url}) center center/cover`,
                            }}
                          ></div>
                        </a>
                        <div className="t-cat">
                          {art.tags.length > 1 ? (
                            <>
                              {art.tags.map((cat, i) => (
                                <span key={i}>
                                  {art.tags.length - 1 === i ? `${cat.name}` : `${cat.name}, `}
                                </span>
                              ))}
                            </>
                          ) : (
                            <>
                              <span>{art.tags[0].name}</span>
                            </>
                          )}
                        </div>
                        <small>{moment(art.created_at).format("LL")}</small>
                        <a href={`/artikel/${art.id}`}>
                          <h3>{art.title}</h3>
                        </a>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="col">
                      <center style={{ color: "gray" }}>No blog yet!</center>
                    </div>
                  </>
                )}
              </div>

              <Pagination
                hideFirstLastPages
                activePage={Number(page)}
                itemsCountPerPage={perPage}
                totalItemsCount={totalData}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </LayoutProduct>
    </>
  );
};

export default Blogs;
