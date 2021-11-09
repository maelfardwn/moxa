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
        const productsData = props.products.length>0? props.products.map((product,i)=>
            i==5?
              <div className="col HPSection2" style={{marginBottom:'30px',marginLeft:'120px'}}>
              <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
              <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
              <h4 className="productsWording">{product.name}</h4>
              </a>
              </div>
            : i==8?
              <div className="col HPSection2" style={{marginBottom:'30px',marginRight:'120px'}}>
              <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
              <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
              <h4 className="productsWording">{product.name}</h4>
              </a>
              </div>
            :
            <div className="col HPSection2" style={{marginBottom:'30px'}}>
              <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
              <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
              <h4 className="productsWording">{product.name}</h4>
              </a>
            </div>
           
       ): <h2>loading..</h2>
  
  return (
    <div>
      <div id="sub">
        <div className="wrapper">
          <div className="row" style={{marginBottom:'35px'}}>
            <div className="col-lg-10 m-auto">
              <h1 >Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p >Rasakan kemudahan mengajukan beragam produk keuangan dalam satu sentuhan lewat fitur unggulan Moxa </p>
            </div>
          </div>
          <div className="row HPSection2-wrapper" >
          {productsData}
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default HPSection2Fix;