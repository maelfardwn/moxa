import React, { useState, useEffect } from "react";
import axios from "axios";
import imageFif from '../../assets/img/imageFif.png'
import imageAcc from '../../assets/img/imageAcc.png'
import imageAstra from '../../assets/img/imageAstra.png'
import imageTaf from '../../assets/img/imageTaf.png'
import imageSera from '../../assets/img/imageSera.png'
import imageKomatsu from '../../assets/img/imageKomatsu.png'
import imageSanf from '../../assets/img/imageSanf.png'
import imageMau from '../../assets/img/imageMau.png'
import imageAstrapay from '../../assets/img/imageAstrapay.png'
import imageAstralife from '../../assets/img/imageAstralife.png'
import imageMobil88 from '../../assets/img/imageMobil88.png'
import imagePermata from '../../assets/img/imagePermata.png'

const HPSection3Fix = (props) => {
  const [partnersApi,setPartners] = useState([])
  useEffect(() => {
    const fetchParnters = async ()=>{
      const response =  await fetch('https://cms.moxa.zali.pro/partners')
      const getPartners = await response.json()
      setPartners(getPartners)
      console.log('getPartners',getPartners)
    }
    fetchParnters()
  }, [])
  const partnerCom = partnersApi.length>0 ? 
                partnersApi.map((partner=>{
                  return <div className="col" style={{margin:'auto'}}>
                         <img src={partner.logo.url} width="100px" height="80px"/>
                     </div>
                })): <p>Loading....</p>
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
      <div  style={{background:'#D3E0FF', marginTop:'30px'}}>
       
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 m-auto" >
              <h1 style={{textAlign:'center',marginTop:'90px',fontWeight:'700',color:'#04325F',fontFamily:'ubuntu',fontSize:'30px'}}>PARTNER MOXA</h1>
              <p style={{textAlign:'center',fontWeight:'400',fontFamily:'ubuntu',color:'#04325F',fontSize:'25px',marginBottom:'50px'}}>Moxa bekerja sama dengan berbagai perusahaan keuangan dan asuransi terbaik di Indonesia untuk menyediakan layanan sesuai kebutuhanmu yang pasti aman serta terpercaya </p>
            <div className="row" style={{marginBottom:'100px'}}>
            {partnerCom}
                
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default HPSection3Fix;
