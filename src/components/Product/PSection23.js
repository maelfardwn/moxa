import React, { useState, useEffect } from "react";
import axios from "axios";
import iconMotor from '../../assets/img/motorIcon.png'


const PSection23 = (props) => {
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
              <h1 style={{fontWeight:'700'}}>{props.title} </h1>
              <p style={{fontWeight:'500'}}>{props.subtitle}  </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Mobil Baru</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Pilihan mobil terbaru untuk menemani aktivitas ada di sini. </p>
            </div> 
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Mobil Bekas</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Pilihan mobil bekas berkualitas yang terjamin perawatannya oleh partner terpercaya kami.</p>
            </div>
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Test Drive</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Rasakan sendiri mencoba mobil impian sebelum menghadirkannya ke depan rumahmu. </p>
            </div>
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

export default PSection23;
