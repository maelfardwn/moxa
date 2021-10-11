import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import HPSection1 from "../components/Homepage/HPSection1";
import HPSection2 from "../components/Homepage/HPSection2";
import HPSection3 from "../components/Homepage/HPSection3";
import HPSection4 from "../components/Homepage/HPSection4";
import HPSectionTesti from "../components/Homepage/HPSectionTesti";
import HPSectionTrivia from "../components/Homepage/HPSectionTrivia";
import HpSectionUsp from "../components/Homepage/HPSectionUsp";

const Homepage = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`),
        axios.get(process.env.REACT_APP_API_URL + `/homepage`),
        axios.get(process.env.REACT_APP_API_URL + "/products?_sort=order:asc"),
      ])
      .then((res) => {
      
        setData(res[0].data);
        setHomeData(res[1].data);
        setProducts(res[2].data);
        console.log(res)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Layout title="Moxa">
        <div id="homepage">
          {loading ? (
            <div>
              <div style={{ height: "100vh" }}></div>
            </div>
          ) : (
            <HPSection1 data={data} />
          )}
          <HPSection2 homeData={homeData} />
          <HPSection3 homeData={homeData} products={products} />
          <HpSectionUsp />
          <HPSectionTesti homeData={homeData} />
          <HPSectionTrivia />
          <HPSection4 />
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
