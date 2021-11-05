import React, { useState, useEffect } from "react";
import axios from "axios";
import iconMotor from '../../assets/img/motorIcon.png'


const PSection2Com = (props) => {
  
      const variants = props.variant && props.variant.length==1 ? props.variant.map((variant)=>
        <div className="col-lg-12 PSection2"  style={{marginTop:'30px'}}>
        <img src={variant.icon.url}/><br/>
        <h6 className="product-title">{variant.title}</h6>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h6 className="product-description">{variant.description} </h6>
        </div>
    </div>) : props.variant ? props.variant.map((variant)=>
        <div className="col-lg-4 PSection2"  >
        <img src={variant.icon.url}/><br/>
        <h6 className="product-title">{variant.title}</h6>
        <h6 className="product-description">{variant.description} </h6>
    </div>) :<h2>Loading</h2>
  return (
    <div>
      <div id="sub">
       
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-8 m-auto PSection1">
              <h1 >{props.title}</h1>
              <p >{props.subtitle}  </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
             {variants}
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto PSection3">
              <h1 >Cara Mengajukan {props.titleSection2} </h1>
              <p >Cari tahu langkah mudah mengajukan {props.titleSection2} hanya dalam hitungan menit  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default PSection2Com;
