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
  
  
        const productsData = props.products.length>0? props.products.map((product,i)=>
       {if(i==5)
        return <div className="col HPSection2" style={{marginBottom:'30px',marginLeft:'150px'}}>
              <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
              <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
              <h4 className="productsWording">{product.name}</h4>
              </a>
            </div>
             if (i==8)
             return <div className="col HPSection2" style={{marginBottom:'30px',marginRight:'100px'}}>
                   <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
                   <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
                   <h4 className="productsWording">{product.name}</h4>
                   </a>
                 </div>
                 if(i!=5 || i!=8)
           return  <div className="col HPSection2" style={{marginBottom:'30px'}}>
           <a href={`/product/detail/${product.id}`} style={{cursor:'pointer',textDecoration:'none'}}>
           <img height="128px" width="128px" src={product.icon.url} style={{marginBottom:'15px'}}/><br/>
           <h4 className="productsWording">{product.name}</h4>
           </a>
         </div>}
       ): <h2>loading..</h2>
  
  return (
    <div>
      <div id="sub">
        <div className="wrapper">
          <div className="row" style={{marginBottom:'50px',marginTop:'50px'}}>
            <div className="col-md-9 m-auto">
              <h1 >Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p >Rasakan kemudahan mengajukan beragam produk keuangan dalam  satu sentuhan lewat fitur unggulan Moxa </p>
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
