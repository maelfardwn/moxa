import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import HPSectionTesti from "../../components/Homepage/HPSectionTesti";
import HPSectionTrivia from "../../components/Homepage/HPSectionTrivia";
import HpSectionUsp from "../../components/Homepage/HPSectionUsp";
import Header from "../../components/Layout/Header";
import HPSection1Fix from "../../components/Homepage/HPSection1Fix";
import HPSection2Fix from "../../components/Homepage/HPSection2Fix";
import HPSection3Fix from "../../components/Homepage/HPSection3Fix";
import HPSection4Fix from "../../components/Homepage/HPSection4Fix";
import PSection1 from "../../components/Product/PSection1";
import LayoutProduct from "../../components/Layout/LayoutProduct";
import PSection2 from "../../components/Product/PSection2";
import PSection3 from "../../components/Product/PSection3";
import PSection4 from "../../components/Product/PSection4";
import MoneyImage from '../../assets/img/MoneyImage.png'
import TestDrive from '../../assets/img'
import PSection23 from "../../components/Product/PSection23";
import PSection33 from "../../components/Product/PSection33";
import PSection32 from "../../components/Product/PSection32";


const PinjamanPage = (props) => {
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <LayoutProduct title="Moxa PINJAMAN TUNAI" descriptions="Pinjaman dana tunai">
        <div id="homepage">
          <PSection1  titleBanner="PINJAMAN TUNAI" subtitleBanner="Pinjaman dana tunai yang bisa digunakan untuk beragam 
                        kebutuhan, seperti modal usaha, pendidikan, renovasi rumah dan lainnya" image={MoneyImage}/>
          <PSection23 />
          <PSection32 />
          <PSection4 />
         
        </div>
      </LayoutProduct>
    </div>
  );
};

export default PinjamanPage;
