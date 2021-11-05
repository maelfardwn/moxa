import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'


const PSection4 = (props) => {
  return (
    <div className="WrapperSection4">
      <div className="WrapperBackground4">
        <h2>INFORMASI LEBIH LANJUT</h2>
        <p>Raih kebebasan finansial kamu lewat fitur-fitur unggulan Moxa.<br/> Kunjungi halaman FAQ untuk info lebih lanjut.</p>
        <div className="row buttonWrapper" >
          <div className="col-md-6" style={{display:'flex',justifyContent:'flex-end'}}>
              <button style={{marginRight:'40px'}}>Lihat FAQ</button>
          </div>
          <div className="col-md-6" style={{display:'flex',justifyContent:'flex-start'}}>
              <button className="btnDownload" style={{marginLeft:'20px'}}>Download Sekarang</button>
          </div>
      </div>
      </div>
    </div>
  );
  // }
};

export default PSection4;
