import React, { useEffect, useState } from "react";
import axios from "axios";
import useWindowDimentions from "../../hooks/useWindowDimentions";
import Slider from "react-slick";

const TGSection2 = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsRow, setProductsRow] = useState(0);
  const [lastRow, setLastRow] = useState(3);

  const { width } = useWindowDimentions();

  const  getData= async()=> {
    let getData
    await axios.get("https://dev.moxa.id/cms/products?_sort=order:asc") 
    .then((res) => {
       getData = res.data 
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
    return getData
  }
  useEffect(() => {
    setLoading(true);
      const fetch = async () => {
        setLoading(false);
        const rowData= await getData();
        console.log('tentng',rowData)
        setProducts(rowData);
        const row = getData().length / 2
        setProductsRow(row);
        setLastRow(rowData.length / 2);
      }
      fetch()
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    dotsClass: "custom-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "products-slider",
    adaptiveHeight: true,
  };

  if (loading) {
    return (
      <div>
        <center id="fitur-produk" style={{ background: "#003762" }}>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
          <span className="sr-only">Loading...</span>
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <div id="fitur-produk">
          <img src={require("../../assets/img/shape43.png")} alt="shape43" className="shape43" />
          <img src={require("../../assets/img/shape44.png")} alt="shape44" className="shape44" />

          <div className="wrapper">
            <div className="row">
              <div className="col-md-10 m-auto">
                <h1>{props.data.section_2_text_1}</h1>
              </div>
            </div>

            <div className="sub-title">{props.data.section_2_text_2}</div>

            {width < 768 ? (
              productsRow.length>0 ? 
              <Slider {...settings}>
                { Array.from(Array(productsRow), (x, index) => index + 1).map((r, i) => (
                  <div>
                    {Array.from(Array(2), (x, index) => index).map((v, i) => (
                      <div>
                        {r === 1 ? (
                          <div>
                            {products[0 + v] ? (
                              <div className={`product prd-${i}`} key={i}>
                                <img src={products[0 + v].icon.url} alt={products[0 + v].name} />
                                <p className="bold">{products[0 + v].name}</p>
                                <p>{products[0 + v].descriptions}</p>
                              </div>
                            ) : null}
                          </div>
                        ) : r === 2 ? (
                          <div>
                            {products[2 + v] ? (
                              <div className={`product prd-${i}`} key={i}>
                                <img src={products[2 + v].icon.url} alt={products[2 + v].name} />
                                <p className="bold">{products[2 + v].name}</p>
                                <p>{products[2 + v].descriptions}</p>
                              </div>
                            ) : null}
                          </div>
                        ) : r === 3 ? (
                          <div>
                            {products[4 + v] ? (
                              <div className={`product prd-${i}`} key={i}>
                                <img src={products[4 + v].icon.url} alt={products[4 + v].name} />
                                <p className="bold">{products[4 + v].name}</p>
                                <p>{products[4 + v].descriptions}</p>
                              </div>
                            ) : null}
                          </div>
                        ) : (
                          <div>
                            {products[8 + v] ? (
                              <div className={`product prd-${i}`} key={i}>
                                <img src={products[8 + v].icon.url} alt={products[8 + v].name} />
                                <p className="bold">{products[8 + v].name}</p>
                                <p>{products[8 + v].descriptions}</p>
                              </div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </Slider>
            :  <div>
                <div className="row">
                  {products.map((pro, i) => (
                   <div className="col-sm-12 product" key={i}>
                    <img src={pro.icon.url} alt={pro.name} />
                    <p className="bold">{pro.name}</p>
                    <p>{pro.descriptions}</p>
                    </div>
                  ))}
            </div>
          </div>) : (
              <div>
                <div className="row">
                  {products.map((pro, i) => (
                    <div className="col-lg-4 col-sm-6 product" key={i}>
                      <img src={pro.icon.url} alt={pro.name} />
                      <p className="bold">{pro.name}</p>
                      <p>{pro.descriptions}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default TGSection2;
