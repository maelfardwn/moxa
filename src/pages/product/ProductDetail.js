import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import HPSection2 from "../../components/Homepage/HPSection2";
import HPSection3 from "../../components/Homepage/HPSection3";
import HPSection4 from "../../components/Homepage/HPSection4";
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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [titleProduct, setTitle] = useState([]);
  const [variants, setVariants] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .all([
        axios.get(process.env.REACT_APP_API_TEST + `/products/${props.match.params.id}`),
      ])
      .then((res) => {
        console.log('detail',res[0].data)
        setTitle(res[0].data.variant_introduction)
        setVariants(res[0].data.variant)
        console.log('params',props.match.params.id)
        console.log(res)
        setProducts()
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let [i,setI] = useState(0)
      
  const [nextButton,setNextButton]= useState(false)
  const previousStep=()=>{

    if(i=>0){
        setI(i-=1)
    }
  }
  const nextStep=()=>{
    if(i<=data.length){
      setNextButton(true)
    }
      if(i<data.length){
        setI(i+=1)
      }
  }
  return (
    <div>
      <LayoutProduct title="Moxa PEMBIAYAAN MOBIL" descriptions="Temukan berbagai macam mobil impian yang bisa kamu tentukan mulai dari warna, spesifikasi hingga hitung cicilan dalam satu sentuhan.">
        <div id="homepage">
          <PSection1  titleBanner="PEMBIAYAAN MOBIL" subtitleBanner="Temukan berbagai macam mobil impian yang bisa kamu tentukan mulai dari warna, spesifikasi hingga hitung cicilan dalam satu sentuhan." image={CarImage}/>
          <PSection2Com title={titleProduct.title} subtitle={titleProduct.description} variant={variants} />
          <PSection3Com variant={variants} 
                       variantData={variants}
          />
          <PSection4 />
         
        </div>
      </LayoutProduct>
    </div>
  );
};

export default ProductDetail;
