import React, { useState, useEffect } from "react";
import axios from "axios";
import iconMotor from '../../assets/img/motorIcon.png'


const PSection2 = (props) => {
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
              <h1 style={{fontWeight:'700'}}>EXPLORE OUR PRODUCT </h1>
              <p style={{fontWeight:'500'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
            <div className="col-md-6" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Motor Baru</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Lorem ipsum dolor sit amet,
dolor sit amet, dolor sit amet, 
dolor sit amet, dolor sit amet, chohci </p>
            </div>    
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 style={{fontWeight:'700'}}>SERBU PROMO YANG SEDANG BERLANGSUNG </h1>
              <p style={{fontWeight:'500'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default PSection2;
