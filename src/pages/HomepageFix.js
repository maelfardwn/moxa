import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import HPSectionTesti from "../components/Homepage/HPSectionTesti";
import HPSectionTrivia from "../components/Homepage/HPSectionTrivia";
import HpSectionUsp from "../components/Homepage/HPSectionUsp";
import HPSection1Fix from "../components/Homepage/HPSection1Fix";
import HPSection2Fix from "../components/Homepage/HPSection2Fix";
import HPSection3Fix from "../components/Homepage/HPSection3Fix";
import HPSection4Fix from "../components/Homepage/HPSection4Fix";

import Phone from '../assets/img/RectanglePhone.png'
import Car from '../assets/img/CarImage.png'
import LayoutProduct from "../components/Layout/LayoutProduct";

const HomepageFix = (props) => {

  const [products,setProducts] = useState([
  ])

  const [data,setData] = useState([
    {
      title:'APLIKASI PINTAR UNTUK SEMUA KEBUTUHAN FINANSIALMU', 
      subtitle:'Pembiayaan mobil, mencari pinjaman, asuransi, dan masih banyak lagi, semuanya dalam satu aplikasi',
      image:Phone 
    },
    {
      title:'APLIKASI PINTAR UNTUK SEMUA KEBUTUHAN FINANSIALMU', 
      subtitle:'Pembiayaan mobil, mencari pinjaman, asuransi, dan masih banyak lagi, semuanya dalam satu aplikasi',
      image:Car 
    }])
  const [loading, setLoading] = useState(true);
  const [partnersApi, setpartnersApi] = useState([]);
  const [getData, setGetData] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`),
        axios.get(process.env.REACT_APP_API_URL + `/homepage`),
        axios.get(process.env.REACT_APP_API_URL + "/products?_sort=order:asc"),
        axios.get(process.env.REACT_APP_API_URL + "/partners?_sort=order:asc"),
        axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`)
      ])
      .then((res) => {
        setData(res[0].data);
        setHomeData(res[1].data);
        setProducts(res[2].data)
        setpartnersApi(res[3].data)
        setDownloadLink(res[4].data[0].button_link)
        console.log('res image',res[0].data[0].image_mobile.name)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <LayoutProduct title={`Moxa `} downloadLink={downloadLink} descriptions={`Aplikasi`}>
        <div id="homepage">
          <HPSection1Fix data={data} />
          <HPSection2Fix products={products} />
          <HPSection3Fix />
          <HPSection4Fix />  
        </div>
      </LayoutProduct>
    </div>
  );
};

export default HomepageFix;
