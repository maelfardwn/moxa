import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
const PSection4 = (props) => {

  let history = useHistory();
  const [downloadLink, setDownloadLink] = useState('');
  useEffect(() => {
        axios.get(`https://moxa-cms.shared.zali.pro/home-banners?_sort=order:asc`)
      .then((res) => {
        
        setDownloadLink(res[0].data[0].button_link)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="WrapperSection4">
      <div className="WrapperBackground4">
        <h2>INFORMASI LEBIH LANJUT</h2>
        <p>Raih kebebasan finansial kamu lewat fitur-fitur unggulan Moxa.<br/> Kunjungi halaman FAQ untuk info lebih lanjut.</p>
        <div className="row buttonWrapper" >
          <div className="col-md-6" style={{display:'flex',justifyContent:'flex-end'}}>
              <a className="btnFaq" href="/faq" style={{marginRight:'40px'}}>Lihat FAQ</a>
          </div>
          <div className="col-md-6 productButtonDownloadFooter" >
          
              <a  className="btnDownload" href={props.downloadLink} style={{marginLeft:'20px'}}>Download Sekarang</a>
           
          </div>
      </div>
      </div>
    </div>
  );
  // }
};

export default PSection4;
