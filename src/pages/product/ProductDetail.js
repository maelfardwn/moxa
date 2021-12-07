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
import CarImage from '../../assets/img/CarImage.png'
import TestDrive from '../../assets/img/IconCar.png'
import PSection23 from "../../components/Product/PSection23";
import PSection33 from "../../components/Product/PSection33";
import PSection2Com from "../../components/Product/PSection2Com";
import PSection3Com from "../../components/Product/PSection3Com";


const ProductDetail = (props) => {
  const id = props.match.params.slug
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState({});
  const [bannerMobile, setBannerMobile] = useState({});
  const [titleProduct, setTitle] = useState([]);
  const [variants, setVariants] = useState([]);
  const [products, setProducts] = useState([]);
  const [downloadLink, setDownloadLink] = useState('');
  const [titlePage, setTitlePage] = useState("loading...")
  useEffect(() => {
    setLoading(true);
    if(data.length <0 ){
      setData([{name: 'loading'}])
    } else {
    axios
      .all([
        axios.get(process.env.REACT_APP_API_TEST + `/products/${id}`),
        axios.get(`https://dev.moxa.id/cms/home-banners?_sort=order:asc`)
      ])
      .then((res) => {
        setData(res[0].data)
        setTitlePage(res[0].data.name)
        console.log('detail',res[0].data)
        setTitle(res[0].data.variant_introduction)
        setVariants(res[0].data.variant)
        setBanner(res[0].data.banner.url)
        setBannerMobile(res[0].data.banner_mobile.url)
        console.log('banner',res[0].data)
        setDownloadLink(res[1].data[0].button_link)
        setProducts()
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });}
  }, []);

  return (
    <div>

      <LayoutProduct title={"Moxa "+titlePage} downloadLink={downloadLink} descriptions={data.descriptions}>
        <div id="homepage" className="detail-product">
          <PSection1  titleBanner={data.name} subtitleBanner={data.descriptions} image={banner} imageMobile={bannerMobile} />
          <PSection2Com title={titleProduct.title} titleSection2={data.name} subtitle={titleProduct.description} variant={variants} />
          <PSection3Com variant={variants} 
                       variantData={variants}
          />
          <PSection4 downloadLink={downloadLink} />
         
        </div>
      </LayoutProduct>
    </div>
  );
};

export default ProductDetail;
