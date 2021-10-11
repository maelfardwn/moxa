import React, { useState, useEffect } from "react";
import axios from "axios";
import PSection1 from "../components/Product/PSection1";
import LayoutProduct from "../components/Layout/LayoutProduct";
import PromoAstra from '../assets/img/PromoAstraPayImage.png'
import PromoMobilImage from '../assets/img/PromoMobilImage.png'
import PromoHajiImage from '../assets/img/PromoHajiImage.png'
import PromoMobilBaruImage from '../assets/img/PromoMobilBaruImage.png'

const PromoPage = (props) => {
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
      <LayoutProduct title="Moxa">
        <div id="homepage">
        
      <div className="wrapper" style={{marginTop:'100px'}}>
          <div className="row">
            <div className="col" style={{margin:'auto'}}>
              <h1 style={{color:'#04325F', fontSize:'30px',fontWeight:'700',textAlign:'center'}}>SERBU PROMO YANG SEDANG BERLANGSUNG</h1>
              <p style={{color:'#04325F', fontSize:'25px',fontWeight:'400',textAlign:'center'}}>Jangan lewatkan beragam promo menarik dari Moxa yang menguntungkan saat melakukan pengajuan </p>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{display:'flex',justifyContent:'center'}}>
                <div className="row" style={{display:'flex',justifyContent:'center'}}>
                    <img src={PromoAstra}/><br/>
                    <button style={{width:'830px',height:'50px', background:'#005DAA',border:'none',borderRadius:'0px 0px 15px 15px',boxShadow:'0px 1px 5px rgba(112, 126, 141, 0.35)',color:'white',fontSize:'20px',fontWeight:'700'}}>Lihat Promo</button>
                </div>
            </div>
          </div>
          <div className="row" style={{marginTop:'100px'}}>
            <div className="col" style={{display:'flex',justifyContent:'center'}}>
                <div className="row" style={{display:'flex',justifyContent:'center'}}>
                    <img src={PromoMobilImage}/><br/>
                    <button style={{width:'830px',height:'50px', background:'#005DAA',border:'none',borderRadius:'0px 0px 15px 15px',boxShadow:'0px 1px 5px rgba(112, 126, 141, 0.35)',color:'white',fontSize:'20px',fontWeight:'700'}}>Lihat Promo</button>
                </div>
            </div>
          </div>
          <div className="row" style={{marginTop:'100px'}}>
            <div className="col" style={{display:'flex',justifyContent:'center'}}>
                <div className="row" style={{display:'flex',justifyContent:'center'}}>
                    <img src={PromoHajiImage}/><br/>
                    <button style={{width:'830px',height:'50px', background:'#005DAA',border:'none',borderRadius:'0px 0px 15px 15px',boxShadow:'0px 1px 5px rgba(112, 126, 141, 0.35)',color:'white',fontSize:'20px',fontWeight:'700'}}>Lihat Promo</button>
                </div>
            </div>
          </div>
          <div className="row" style={{marginTop:'100px',marginBottom:'100px'}}>
            <div className="col" style={{display:'flex',justifyContent:'center'}}>
                <div className="row" style={{display:'flex',justifyContent:'center'}}>
                    <img src={PromoMobilBaruImage}/><br/>
                    <button style={{width:'830px',height:'50px', background:'#005DAA',border:'none',borderRadius:'0px 0px 15px 15px',boxShadow:'0px 1px 5px rgba(112, 126, 141, 0.35)',color:'white',fontSize:'20px',fontWeight:'700'}}>Lihat Promo</button>
                </div>
            </div>
          </div>
        </div>
        </div>
      </LayoutProduct>
    </div>
  );
};

export default PromoPage;
