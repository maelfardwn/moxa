import React, { useState, useEffect } from "react";
import axios from "axios";
import iconAsuransi from '../../assets/img'


const PSection26 = (props) => {
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
                <img src={iconAsuransi}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Jiwa</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Asuransi Jiwa murni yang 
memberikan manfaat meninggal 
dunia karena sebab apapun. </p>
            </div> 
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Penyakit Kritis</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Asuransi Jiwa murni yang memberikan 
perlindungan atas penyakit kritis kanker 
tahap awal, kanker tahap lanjut, 
stroke dan jantung.</p>
            </div>
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Mobil</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Perlindungan mobil yang akan 
memberikan keamanan dan 
kenyamanan saat berkendara. </p>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Kebakaran</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Perlindungan terhadap rumah 
kesayangan, mulai dari risiko kebakaran, 
kerusuhan dan huru-hara. </p>
            </div> 
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Kecelakaan</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Perlindungan atau santunan 
yang diberikan akibat kecelakaan </p>
            </div>
            <div className="col" style={{margin:'auto'}}>
                <img src={iconMotor}/><br/>
                <h3 style={{color:'#04325F',fontWeight:'700',fontSize:'25px'}}>Asuransi Covid-19</h3>
                <p style={{fontWeight:'500',fontSize:'20px'}}>Perlindungan yang hadir berdasarkan 
kebutuhan masyarakat di masa pandemi 
COVID-19  saat ini.  </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 style={{fontWeight:'700'}}>Cara Mengajukan Produk Asuransi </h1>
              <p style={{fontWeight:'500'}}>Cari tahu langkah mudah mengajukan produk Asuransi 
hanya dalam hitungan menit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default PSection26;
