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
              <h1 style={{fontWeight:'700'}}>Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p style={{fontWeight:'500'}}>Rasakan kemudahan mengajukan beragam produk keuangan dalam satu sentuhan lewat fitur unggulan Moxa </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
          {props.products.map((product)=>{
            return  <div className="col-md-3" style={{margin:'auto',marginBottom:'20px'}}>
                      <img src={product.image}/><br/>
                      <p style={{fontWeight:'500'}}>{product.text}</p>
                    </div>
                })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HPSection2Fix;