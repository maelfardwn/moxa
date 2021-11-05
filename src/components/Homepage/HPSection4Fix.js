import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import blo1Image from '../../assets/img/blog1.png'
import blo2Image from '../../assets/img/blog2.png'
import { set } from "react-ga";
import Moment from 'react-moment';
import arrowRight from '../../assets/img/vectorRight.png'
const HPSection4Fix = (props) => {
  const [loading, setLoading] = useState(true);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [partners, setPartners] = useState([]);
  const [data,setData] = useState([])

  const  getData= async()=> {
    let getData
    await axios.get("https://moxa-cms.shared.zali.pro/articles") 
    .then((res) => {
       getData = res.data 
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
    return getData
  }
  useEffect(  () => {
    setLoading(true);
    axios
      .all([
        axios.get("https://moxa-cms.shared.zali.pro/homepage"),
        axios.get("https://moxa-cms.shared.zali.pro/partners?_sort=order:asc"),
        axios.get("https://moxa-cms.shared.zali.pro/articles"),
      ])
      .then((res) => {
        setText1(res[0].data.text_partner_1);
        setText2(res[0].data.text_partner_2);
        setPartners(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
      async function fetchData() {
        setLoading(true);
        const dataBlog = await getData()
        const sliceData = dataBlog.slice(0,2)
        await setData(sliceData)
        console.log('ini data',data)
        setLoading(false);
      }
      fetchData()
  }, []);
  const items = data? data.slice(0, 2).map((data)=>
              <div className="news-item col-md-6">
                <div className="zoom-wrapper" >
                <a href={`/artikel/${data.id}`}  style={{textDecoration:'none'}}>
                    <img  src={data.cover.url } className="cover-zoom" />
                </a>
                <a href={`/artikel/${data.id}`} style={{textDecoration:'none'}}>
                    <h4 className='titleBlog'>{data.title}</h4>
                    <h6 className='date'>Moxa {data.tags[0].name}/{<Moment format="DD MMMM YYYY">{data.created_at}</Moment>}</h6>
                </a>
                </div>
            </div>
  ) : <h2>loading</h2>
  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
     <div>
        <div id="sub">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h3 >BLOG </h3>
              <h5 >Cari tahu berita terkini lewat artikel Moxa sebagai inspirasi untuk setiap pilihanmu  </h5>
            </div>
          </div>
          <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
          {items}
          </div>
          <div  style={{margin:'auto',textAlign:'center',padding:'0'}}>
              
                <a href="/artikel/blog" style={{fontSize:'28px',textDecoration:'none',fontWeight:'700', color:'#04325F'}}>Lihat Semua Blog </a> 
              
               <img className='promoLink' height="20px" style={{verticalAlign:'auto'}}  src={arrowRight}/> 
          
          </div>
        </div>
      </div>
      </div>
    );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow">
      <img src={require("../../assets/img/partner/next2.png")} alt="next" onClick={onClick} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow">
      <img src={require("../../assets/img/partner/prev2.png")} alt="prev" onClick={onClick} />
    </div>
  );
};

export default HPSection4Fix;
