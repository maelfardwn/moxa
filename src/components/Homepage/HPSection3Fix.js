import React, { useState, useEffect } from "react";
import axios from "axios";

const HPSection3Fix = (props) => {
  const [partnersApi,setPartners] = useState([])
  useEffect(() => {
    const fetchParnters = async ()=>{
      const response =  await fetch(process.env.REACT_APP_API_URL + '/partners?_sort=order:asc')
      const getPartners = await response.json()
      setPartners(getPartners)
    }
    fetchParnters()
  }, [])
  const partnerCom = partnersApi.length>0 ? 
                partnersApi.map((partner=>{
                  return <div className="">
                         <img src={partner.logo.url} style={{width:'auto',maxWidth:'172px'}}/>
                     </div>
                })): <p>Loading....</p>
  return (
    <div>
      <div className="partersSection" >
       
        <div className="wrapper" style={{opacity:'1'}}>
          <div className="row">
            <div className="col-lg-12 m-auto" >
              <h1 >PARTNER MOXA</h1>
              <p>Moxa bekerja sama dengan berbagai perusahaan keuangan dan asuransi terbaik
              <br/>di Indonesia untuk menyediakan layanan sesuai kebutuhanmu 
              <br/>yang pasti aman serta terpercaya </p>
            <div className="row logo-partner" style={{marginBottom:'100px'}}>
            {partnerCom}
                
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default HPSection3Fix;
