import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'


const PSection32 = (props) => {

      const [TanpaJaminan,setTanpaJaminan] =useState([{
        "type": "Pinjaman Tanpa Jaminan",
        "description": "Pinjaman Tanpa Jaminan adalah pinjaman tanpa jaminan",
      },
      {
        "type": "Pinjaman tanpa Jaminan 2",
        "description": "Pinjaman tanpa ke 2 Jaminan adalah pinjaman tanpa jaminan",
        
      }])
      const [DenganJaminan,setDenganJaminan] =useState([
      {
        "type": "Pinjaman Dengan Jaminan",
        "description": "Pinjaman Dengan Jaminan adalah pinjaman Dengan jaminan",
      },
      {
        "type": "Pinjaman Dengan Jaminan 2",
        "description": "Pinjaman Dengan ke 2 Jaminan adalah pinjaman Dengan jaminan",
        
      }])
      const [data,setData] =useState(TanpaJaminan)
      const [tabButtonTanpaJaminan,setTabButtonTanpaJaminan]=useState([
          {background:"#005DAA",
          color:'white'
        }
        ])
      const [tabButtonDenganJaminan,setTabButtonDenganJaminan]=useState([{background:"#D2D9E0",color:'#005DAA'}])
      let [i,setI] = useState(0)
      
    useEffect(() => {
      setData(TanpaJaminan)
    }, []);

    const TanpaJaminanOnChange=()=>{
        setTabButtonTanpaJaminan([{background:"#005DAA",color:'white'}]);
        setTabButtonDenganJaminan([{background:"#D2D9E0",color:'#005DAA'}])
        setData(TanpaJaminan)
    }
    const DenganJaminanOnChange=()=>{
        setTabButtonTanpaJaminan([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonDenganJaminan([{background:"#005DAA",color:'white'}])
        setData(DenganJaminan)
    }
    const previousStep=()=>{

        if(i=>0){
            setI(i-=1)
        }
      }
      const nextStep=()=>{
          if(i<2){
        setI(i+=1)
        }else{
            setI(i)
        }
      }

  return (
    <div>
      <div className="wrapper">

      <div className="row">
        <div className="col">
            <button onClick={TanpaJaminanOnChange} style={{width:'390px',height:'74px',color:tabButtonTanpaJaminan[0].color, background:tabButtonTanpaJaminan[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Pinjaman Tanpa Jaminan</button>
        </div>
        <div className="col">
            <button onClick={DenganJaminanOnChange} style={{width:'390px',height:'74px',color:tabButtonDenganJaminan[0].color, background:tabButtonDenganJaminan[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Pinjaman Dengan Jaminan</button>
        </div>
      </div>
      </div>
      <div style={{position:'relative', height:'500px',marginBottom:'300px'}}>
      <img src={MockUpHp} className="SliderHp"/>
      <div style={{position:'relative',paddingTop:'10px'}}>
        <div style={{width: '1000px',margin:'auto', borderRadius:'10px', height:'550px',marginTop:'100px', background:'rgba(242, 244, 249, 0.5)'}}>
            <div style={{padding:'180px'}}>
            <h3 style={{paddingBottom:'50px',color:'#04325F',fontWeight:'700',fontSize:'30px'}}>{data[i].type}</h3>
            <p style={{color:'#04325F',fontWeight:'400',fontSize:'28px'}}>{data[i].description} </p>
            <div style={{width:'240px',height:'37px',background:'#005DAA',padding:'0',margin:'0',display:'flex',justifyContent:'center',borderRadius:'15px'}} className="row">
                <div className="col-md-3"> 
                    <button onClick={previousStep} style={{height:'37px', border:'none',background:'none'}}> <img src={arrowLeft} alt="right"/></button> 
                </div>
                <div className="col-md-6" >
                    <p style={{lineHeight:'37px',color:'white',textAlign:'center', fontSize:'20px',fontWeight:'500'}}> {i+1}/5 </p> 
                </div>
                <div className="col" style={{display:'flex',justifyContent:'flex-end'}}>
                    <button onClick={nextStep} style={{height:'37px', border:'none',background:'none'}}><img src={arrowRight} alt="left"/></button><a></a> </div>
                </div>
            </div>
        </div>
       

      </div>
      </div>
    </div>
  );
  // }
};

export default PSection32;
