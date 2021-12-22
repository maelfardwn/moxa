import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import TGSection1 from "../components/Tentang/TGSection1";
import TGSection2 from "../components/Tentang/TGSection2";
import TGSection3 from "../components/Tentang/TGSection3";
import HPSectionUsp from "../components/Homepage/HPSectionUsp";
import TGSectionVM from "../components/Tentang/TGSectionVM";
import TGSectionPartners from "../components/Tentang/TGSectionPartners";
import LayoutProduct from "../components/Layout/LayoutProduct";

const Tentang = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [partners, setPartners] = useState([]);
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    setLoading(true);

    axios.get(process.env.REACT_APP_API_URL + `/cms/home-banners?_sort=order:asc`)
    .then((res) => {
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });

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
      <LayoutProduct downloadLink={downloadLink} title="Tentang Moxa">
        <div id="tentang">
          <TGSection1 data={data} />
          <TGSectionVM />
          <TGSectionPartners partners={partners} />
          <HPSectionUsp />
          <TGSection2 data={data} />
          <TGSection3 data={data} />
        </div>
      </LayoutProduct>
    </div>
  );
};

export default Tentang;
