import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import TGSection1 from "../components/Tentang/TGSection1";
import TGSection2 from "../components/Tentang/TGSection2";
import TGSection3 from "../components/Tentang/TGSection3";
import HPSectionUsp from "../components/Homepage/HPSectionUsp";
import TGSectionVM from "../components/Tentang/TGSectionVM";
import TGSectionPartners from "../components/Tentang/TGSectionPartners";

const Tentang = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL + "/about-page")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL + "/partners?_sort=order:asc")
      .then((res) => res.data)
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Layout title="Tentang Moxa">
        <div id="tentang">
          <TGSection1 data={data} />
          <TGSectionVM />
          <TGSectionPartners partners={partners} />
          <HPSectionUsp />
          <TGSection2 data={data} />
          <TGSection3 data={data} />
        </div>
      </Layout>
    </div>
  );
};

export default Tentang;
