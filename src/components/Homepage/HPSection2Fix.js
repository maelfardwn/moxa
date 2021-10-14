import React, { useState, useEffect } from "react";
import axios from "axios";
import iconCar from '../../assets/img/IconCar.png'
import iconMotor from '../../assets/img/iconMotor.png'
import iconRental from '../../assets/img/iconRental.png'
import iconAsuransi from '../../assets/img/iconAsuransi.png'
import iconRp from '../../assets/img/iconRp.png'
import iconMasjid from '../../assets/img/iconMasjid.png'
import iconTractor from '../../assets/img/iconTractor.png'
import iconElectric from '../../assets/img/iconElectric.png'
import iconTabungan from '../../assets/img/iconTabungan.png'


const HPSection2Fix = (props) => {
  
  const [products,setProducts] = useState([
    {image:iconCar, text:'Pembiayaan Mobil',link:'/product/car'},
    {image:iconMotor, text:'Pembiayaan Motor',link:'/product/motor'},
    {image:iconRental, text:'Rental',link:'/product/rental'},
    {image:iconAsuransi, text:'Asuransi Kesehatan',link:'/product/asuransi'},
    {image:iconRp, text:'Pinjaman Tunai',link:'/product/pinjaman'},
    {image:iconMasjid, text:'Perjalanan Religi',link:'/product/perjalanan'},
    {image:iconTractor, text:'Truk dan Alat Berat',link:'/product/alatberat'},
    {image:iconElectric, text:'Elektronik dan Lainnya',link:'/product/elektronik'},
    {image:iconTabungan, text:'Tabungan',link:'/product/tabungan'}
  ])

  // const [loading, setLoading] = useState(true);
  // const [text1, setText1] = useState("");
  // const [text2, setText2] = useState("");

  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get(process.env.REACT_APP_API_URL + "/homepage")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setText1(data.section_2_text_1);
  //       setText2(data.section_2_text_2);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <center id="sub">
  //         <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
  //         <span className="sr-only">Loading...</span>
  //       </center>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <div id="sub">
   
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 >Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p >Rasakan kemudahan mengajukan beragam produk keuangan dalam satu sentuhan lewat fitur unggulan Moxa </p>
            </div>
          </div>
          <div className="row products" style={{marginTop:'50px',marginBottom:'50px'}}>
                <div className="col" style={{margin:'auto',marginBottom:'20px'}}>
                      <a href={products[0].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[0].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[0].text}</h4>
                      </a>
                </div>
                <div className="col" style={{margin:'auto',marginBottom:'20px'}}>
                      <a href={products[1].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[1].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[1].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[2].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[2].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[2].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[3].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[3].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[3].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[4].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[4].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[4].text}</h4>
                      </a>
                </div>
              </div>
              <div className="row" style={{marginBottom:'50px'}}>
                <div className="col" style={{margin:'auto',marginBottom:'20px'}}>
                      <a href={products[5].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[5].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[5].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[6].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[6].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[6].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[7].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[7].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[7].text}</h4>
                      </a>
                </div>
                <div className="col" style={{marginBottom:'20px'}}>
                      <a href={products[8].link} style={{cursor:'pointer',textDecoration:'none'}}>
                      <img src={products[8].image} style={{marginBottom:'15px'}}/><br/>
                      <h4 className="productsWording">{products[8].text}</h4>
                      </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HPSection2Fix;
