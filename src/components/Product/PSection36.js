import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'


const PSection36 = (props) => {

      const [AsuransiJiwa,setAsuransiJiwa] =useState([{
        "type": "AsuransiJiwa ke 1",
        "description": "AsuransiJiwa ke 1 adalah AsuransiJiwa",
      },
      {
        "type": "AsuransiJiwa ke 2",
        "description": "AsuransiJiwa ke 2",
        
      }])
      const [AsuransiPenyakitKritis,setAsuransiPenyakitKritis] =useState([{
        "type": "AsuransiPenyakitKritis ke 1",
        "description": "AsuransiPenyakitKritis ke 1 adalah AsuransiPenyakitKritis",
      },
      {
        "type": "AsuransiPenyakitKritis ke 2",
        "description": "AsuransiPenyakitKritis ke 2 adalah AsuransiPenyakitKritis ke 2",
        
      }])
      
      const [AsuransiMobil,setAsuransiMobil] =useState([{
        "type": "AsuransiMobil ke 1",
        "description": "AsuransiMobil ke 1 matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "AsuransiMobil ke 2",
        "description": "AsuransiMobil ke 2 adalah motor dengan transmisi gigi",
        
      }])
      const [AsuransiKebakaran,setAsuransiKebakaran] =useState([{
        "type": "AsuransiKebakaran ke 1",
        "description": "AsuransiKebakaran ke 1 matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "AsuransiKebakaran ke 2",
        "description": "AsuransiKebakaran ke 2 adalah motor dengan transmisi gigi",
        
      }])
      
      const [AsuransiKecelakaan,setAsuransiKecelakaan] =useState([{
        "type": "AsuransiKecelakaan ke 1",
        "description": "AsuransiKecelakaan ke 1 matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "AsuransiKecelakaan ke 2",
        "description": "AsuransiKecelakaan ke 2 adalah motor dengan transmisi gigi",
        
      }])

      const [AsuransiCovid,setAsuransiCovid] =useState([{
        "type": "AsuransiCovid ke 1",
        "description": "AsuransiCovid ke 1 matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "AsuransiCovid ke 2",
        "description": "AsuransiCovid ke 2 adalah motor dengan transmisi gigi",
        
      }])





      const [data,setData] =useState(AsuransiJiwa)
      const [tabButtonColorAsuransiJiwa,setTabButtonColorAsuransiJiwa]=useState([
          {background:"#005DAA",
          color:'white'
        }
        ])
      const [tabButtonColorAsuransiPenyakitKritis,setTabButtonColorAsuransiPenyakitKritis]=useState([{background:"#D2D9E0",color:'#005DAA'}])
      const [tabButtonColorMobilTest,setTabButtonColorMobilTest]=useState([{background:"##D2D9E0",color:'#005DAA'}])
      const [tabButtonColorAsuransiKebakaran,setTabButtonColorAsuransiKebakaran]=useState([{background:"##D2D9E0",color:'#005DAA'}])
      
      let [i,setI] = useState(0)
      
    useEffect(() => {
      setData(AsuransiJiwa)
    }, []);

    const AsuransiJiwaOnChange=()=>{
        setTabButtonColorAsuransiJiwa([{background:"#005DAA",color:'white'}]);
        setTabButtonColorAsuransiPenyakitKritis([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#D2D9E0",color:'#005DAA'}])
        setData(AsuransiJiwa)
    }
    const AsuransiPenyakitKritisOnChange=()=>{
        setTabButtonColorAsuransiJiwa([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorAsuransiPenyakitKritis([{background:"#005DAA",color:'white'}])
        setTabButtonColorMobilTest([{background:"#D2D9E0",color:'#005DAA'}])
        setData(AsuransiPenyakitKritis)
    }
    
    const AsuransiMobilOnChange=()=>{
        
        setTabButtonColorAsuransiJiwa([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorAsuransiPenyakitKritis([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#005DAA",color:'white'}])
        setData(AsuransiMobil)
      }
    
      const AsuransiKebakaranOnChange=()=>{
        
        setTabButtonColorAsuransiJiwa([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorAsuransiPenyakitKritis([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#005DAA",color:'white'}])
        setData(AsuransiKebakaran)
      }
      
    const AsuransiKecelakaanOnChange=()=>{
        
        setTabButtonColorAsuransiJiwa([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorAsuransiPenyakitKritis([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#005DAA",color:'white'}])
        setData(AsuransiKecelakaan)
      }
      const AsuransiCovidOnChange=()=>{
          
          setTabButtonColorAsuransiJiwa([{background:"#D2D9E0",color:'#005DAA'}]);
          setTabButtonColorAsuransiPenyakitKritis([{background:"#D2D9E0",color:'#005DAA'}])
          setTabButtonColorMobilTest([{background:"#005DAA",color:'white'}])
          setData(AsuransiCovid)
        }

    const previousStep=()=>{

        if(i=>0){
            setI(i-=1)
        }
      }
      const nextStep=()=>{
          if(i<data.length){
        setI(i+=1)
    }
      }

  return (
    <div>
      <div className="wrapper">

      <div className="row">
        <div className="col">
            <button onClick={AsuransiJiwaOnChange} style={{width:'308px',height:'74px',color:tabButtonColorAsuransiJiwa[0].color, background:tabButtonColorAsuransiJiwa[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Jiwa</button>
        </div>
        <div className="col">
            <button onClick={AsuransiPenyakitKritisOnChange} style={{width:'348px',height:'74px',color:tabButtonColorAsuransiPenyakitKritis[0].color, background:tabButtonColorAsuransiPenyakitKritis[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Penyakit Kritis</button>
        </div><div className="col">
            <button onClick={AsuransiMobilOnChange} style={{width:'308px',height:'74px',color:tabButtonColorMobilTest[0].color, background:tabButtonColorMobilTest[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Mobil</button>
        </div>
      </div>
      <div className="row" style={{marginTop:'50px'}}>
        <div className="col">
            <button onClick={AsuransiKebakaranOnChange} style={{width:'338px',height:'74px',color:tabButtonColorAsuransiJiwa[0].color, background:tabButtonColorAsuransiJiwa[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Kebakaran</button>
        </div>
        <div className="col">
            <button onClick={AsuransiKecelakaanOnChange} style={{width:'378px',height:'74px',color:tabButtonColorAsuransiPenyakitKritis[0].color, background:tabButtonColorAsuransiPenyakitKritis[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Kecelakaan</button>
        </div><div className="col">
            <button onClick={AsuransiCovidOnChange} style={{width:'378px',height:'74px',color:tabButtonColorMobilTest[0].color, background:tabButtonColorMobilTest[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Asuransi Covid</button>
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

export default PSection36;
