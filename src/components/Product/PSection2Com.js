import React, { useState, useEffect } from "react";
import axios from "axios";
import iconMotor from '../../assets/img/motorIcon.png'


const PSection2Com = (props) => {
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
      const variants = props.variant? props.variant.map((variant)=>
        <div className="col" >
        <img src={variant.icon.url}/><br/>
        <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px',marginTop:'10px'}}>{variant.title}</h3>
        <p style={{fontWeight:'500',fontSize:'20px'}}>{variant.description} </p>
    </div>
      ) :<h2>Loading</h2>
  return (
    <div>
      <div id="sub">
       
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 style={{fontWeight:'700'}}>{props.title} </h1>
              <p style={{fontWeight:'500'}}>{props.subtitle}  </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
             {variants}
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 style={{fontWeight:'700'}}>Cara Mengajukan Produk Mobil </h1>
              <p style={{fontWeight:'500'}}>Cari tahu langkah mudah mengajukan produk mobil hanya dalam hitungan menit  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default PSection2Com;
