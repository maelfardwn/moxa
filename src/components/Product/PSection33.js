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

export default PSection33;
