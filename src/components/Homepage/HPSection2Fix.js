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
        const productsData = props.products.length>0? props.products.map((product,i)=>
        
      
            <div className="col" >
              <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
              <img src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
              <h4 className="productsWording">{product.name}</h4>
              </a>
            </div>
       ): <h2>loading..</h2>
  
  return (
    <div>
      <div id="sub">
        <div className="wrapper">
          <div className="row" style={{marginBottom:'100px'}}>
            <div className="col-lg-8 m-auto">
              <h1 >Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p >Rasakan kemudahan mengajukan beragam produk keuangan dalam satu sentuhan lewat fitur unggulan Moxa </p>
            </div>
          </div>
          <div className="row " >
          {productsData}
          </div> 
        </div>
      </div>
    </div>
  );
};
export default HPSection2Fix;