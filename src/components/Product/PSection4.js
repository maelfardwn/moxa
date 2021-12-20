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
  const [moreInfoLine1,setMoreInfoLine1] = useState('')
  const [moreInfoLine2,setMoreInfoLine2] = useState('')

  useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`)
      .then((res) => {
        
        setDownloadLink(res[0].data[0].button_link)
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(process.env.REACT_APP_API_URL + `/about-page`)
      .then((res) => {
        const data = res.data.more_product_info.split('.')
        setMoreInfoLine1(data[0]+'.')
        setMoreInfoLine2(data[1])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="WrapperSection4">
      <div className="WrapperBackground4">
        <h2>INFORMASI LEBIH LANJUT</h2>
        <p>{moreInfoLine1}{moreInfoLine2}</p>
        <div className="row buttonWrapper" >
          <div className="col-md-6 PSection2" style={{display:'flex',justifyContent:'flex-end'}}>
              <a className="btnFaq" href="/faq" style={{marginRight:'40px'}}>Lihat FAQ</a>
          </div>
          <div className="col-md-6 productButtonDownloadFooter PSection2" >
          
              <a  className="btnDownload" href={props.downloadLink} style={{marginLeft:'20px'}}>Download Sekarang</a>
           
          </div>
      </div>
      </div>
    </div>
  );
  // }
};

export default PSection4;
