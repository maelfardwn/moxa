import React, { useState, useEffect } from "react";
import axios from "axios";

const HPSection3 = (props) => {
  // const [loading, setLoading] = useState(true);
  // const [text1, setText1] = useState("");
  // const [text2, setText2] = useState("");
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .all([
  //       axios.get(process.env.REACT_APP_API_URL + "/homepage"),
  //       axios.get(process.env.REACT_APP_API_URL + "/products?_sort=order:asc"),
  //     ])
  //     .then((res) => {
  //       setText1(res[0].data.section_3_text_1);
  //       setText2(res[0].data.section_3_text_2);
  //       setProducts(res[1].data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <center id="product">
  //         <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
  //         <span className="sr-only">Loading...</span>
  //       </center>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <div id="product">
        <img src={require("../../assets/img/shape40.png")} alt="shape40" className="shape40" />

        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6 left">
              <h1>{props.homeData.section_3_text_1}</h1>

              <p>{props.homeData.section_3_text_2}</p>

              <div className="lists">
                {props.products.map((pro, i) => (
                  <div className={`div${i + 1} list`} key={pro.id}>
                    <img src={pro.icon2.url} alt="icon" />
                    <span>{pro.name}</span>
                  </div>
                ))}
              </div>

              <div className="cta-center">
                <a className="cta-product" href="/tentang">
                  Cari tahu di sini
                </a>
              </div>
            </div>
            <div className="col-lg-6 right">
              <img src={require("../../assets/img/homepage/product2.png")} alt="bg2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default HPSection3;
