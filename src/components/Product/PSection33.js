import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'


const PSection33 = (props) => {

      const [MobilBaru,setMobilBaru] =useState([{
        "type": "Mobil Baru matic",
        "description": "Mobil baru matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "Mobil Baru manual",
        "description": "Mobil baru manual adalah motor dengan transmisi gigi",
        
      }])
      const [MobilBekas,setMobilBekas] =useState([{
        "type": "Mobil Bekas matic",
        "description": "Mobil Bekas matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "Mobil Bekas manual",
        "description": "Mobil Bekas manual adalah motor dengan transmisi gigi",
        
      }])
      
      const [TestDrive,setTestDrive] =useState([{
        "type": "TestDrive Mobil matic",
        "description": "TestDrive matic adalah motor yang tidak memakai transmisi",
      },
      {
        "type": "TestDrive manual",
        "description": "TestDrive Bekas manual adalah motor dengan transmisi gigi",
        
      }])
      const [data,setData] =useState(MobilBaru)
      const [tabButtonColorMobilBaru,setTabButtonColorMobilBaru]=useState([
          {background:"#005DAA",
          color:'white'
        }
        ])
      const [tabButtonColorMobilBekas,setTabButtonColorMobilBekas]=useState([{background:"#D2D9E0",color:'#005DAA'}])
      const [tabButtonColorMobilTest,setTabButtonColorMobilTest]=useState([{background:"##D2D9E0",color:'#005DAA'}])
      let [i,setI] = useState(0)
      
    useEffect(() => {
      setData(MobilBaru)
    }, []);

    const MobilBaruOnChange=()=>{
        setTabButtonColorMobilBaru([{background:"#005DAA",color:'white'}]);
        setTabButtonColorMobilBekas([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#D2D9E0",color:'#005DAA'}])
        setData(MobilBaru)
    }
    const MobilBekasOnChange=()=>{
        setTabButtonColorMobilBaru([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorMobilBekas([{background:"#005DAA",color:'white'}])
        setTabButtonColorMobilTest([{background:"#D2D9E0",color:'#005DAA'}])
        setData(MobilBekas)
    }
    
    const TestDriveOnChange=()=>{
        
        setTabButtonColorMobilBaru([{background:"#D2D9E0",color:'#005DAA'}]);
        setTabButtonColorMobilBekas([{background:"#D2D9E0",color:'#005DAA'}])
        setTabButtonColorMobilTest([{background:"#005DAA",color:'white'}])
        setData(TestDrive)
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
            <button onClick={MobilBaruOnChange} style={{width:'278px',height:'74px',color:tabButtonColorMobilBaru[0].color, background:tabButtonColorMobilBaru[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Mobil Baru</button>
        </div>
        <div className="col">
            <button onClick={MobilBekasOnChange} style={{width:'278px',height:'74px',color:tabButtonColorMobilBekas[0].color, background:tabButtonColorMobilBekas[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Mobil Bekas</button>
        </div><div className="col">
            <button onClick={TestDriveOnChange} style={{width:'278px',height:'74px',color:tabButtonColorMobilTest[0].color, background:tabButtonColorMobilTest[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>Test Drive</button>
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

export default PSection33;
