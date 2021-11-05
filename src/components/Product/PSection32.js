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
       <div className="wrappperSection3">
      <img src={MockUpHp} className="SliderHp"/> 
      <div className="wrappperSection3-2">
        <div className="wrappperSection3-3">
            <h3 className="titleSection3">{data[i].type}</h3>
            <h4 className="subtitleSection3">{data[i].description} </h4>
            <div  className="nav-handler row ">
                <div className="col-md-3 col-sm-3 "> 
                    <button onClick={previousStep} style={{height:'37px', border:'none',background:'none'}}> <img src={arrowLeft} alt="right"/></button> 
                </div>
                <div className="col-md-6 col-sm-6 " style={{display:'flex',justifyContent:'center'}}>
                    <h5 style={{margin:'auto'}}> {i+1}/5 </h5> 
                </div>
                <div className="col-md-3 col-sm-3 " style={{display:'flex',justifyContent:'flex-end'}}>
                    <button onClick={nextStep} style={{height:'37px', border:'none',background:'none'}}><img src={arrowRight} alt="left"/></button><a></a> </div>
                </div>
            
        </div>
      </div>
      </div>
    </div>
  );
  // }
};

export default PSection32;
