import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUpHp from '../../assets/img/MockupMoxaHp.png'
import arrowRight from '../../assets/img/arrowRightWhite.png'
import arrowLeft from '../../assets/img/arrowLeftWhite.png'
import frameHP from '../../assets/img/Galaxy.png'

const PSection3Com = (props) => {

      
     
      const [nextButton,setNextButton]= useState(false)
      const [prevButton,setPrevButton]= useState(true)
     
        const [tabButtonColorMobilTest,setTabButtonColorMobilTest]=useState([{background:"##D2D9E0",color:'#005DAA'}])
        const [tabButtonColorMobilBekas,setTabButtonColorMobilBekas]=useState([{background:"##D2D9E0",color:'#005DAA'}])
        
    
      
    useEffect(() => {
      
      
    }, []);

      let [isActtive,setisActtive]=useState([
        {background:"#005DAA",
        color:'#FFFFFF'
      }
      ])
      let [notActive,setNotActive]=useState([{background:"##D2D9E0",color:'#005DAA'}])
       let image;
      const Tmp=(i)=>{ 
        setIndexGuide(0)
        setNextButton(false)
        setTabsIndex(i)
        setNotActive([{color:'#005DAA'}])
      }
      let [indexGuide,setIndexGuide] = useState(0)
      
          const previousStep=()=>{
            
              if(indexGuide>0){
                setPrevButton(false)
                  setIndexGuide(indexGuide-=1,() =>{console.log(indexGuide)})
              }
              if(indexGuide<=0){
                setPrevButton(true)
              }
            }
      const nextStep=()=>{
        if(indexGuide<props.variant[tabsIndex].guides.length){
          setIndexGuide(indexGuide+=1,() =>{console.log(indexGuide)})
          setPrevButton(false)
          console.log(indexGuide)
          setNextButton(false)
        }
         if((indexGuide+1)==props.variant[tabsIndex].guides.length ){
          setNextButton(true)
        }
      }
      const [tabsIndex,setTabsIndex]= useState(0)
    const tabs = props.variant.length>0 && props.variant.length>1 ? props.variant.map((variant,i)=>
                i==tabsIndex?
                <div className="col-md-4" style={{zIndex:'90'}}>
                    <button  style={{paddingLeft:'4rem',paddingRight:'4rem',zIndex:'90',height:'74px',marginTop:'30px',color:isActtive[0].color, background:isActtive[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>{variant.title}</button>
                </div>:
                <div className="col-md-4" style={{zIndex:'90'}}>
                    <button onClick={()=>Tmp(i)} style={{paddingLeft:'4rem',paddingRight:'4rem',zIndex:'90',height:'74px',marginTop:'30px', color:notActive[0].color, background:notActive[0].background,borderRadius:'43px',fontSize:'28px',fontWeight:'700',border:'none'}}>{variant.title}</button>
                </div>) : null
    const variantData = props.variant.length>0?
    
    <div className="wrappperSection3">
    <img src={frameHP} className="FrameHP"/>
<img src={props.variant[tabsIndex].guides[indexGuide].image.url} className="SliderHp"/>
    <div className="wrappperSection3-2">

    <div className="wrappperSection3-3">
    
    <div className="row">
      <h3 className="titleSection3">{props.variant[tabsIndex].guides[indexGuide].title}</h3>
    </div>
    <div className="row">
      <h4 className="subtitleSection3">{props.variant[tabsIndex].guides[indexGuide].description} </h4>
    </div>
    <div  className="nav-handler row ">
        <div className="col-md-3 col-sm-3 "> 
            <button onClick={previousStep} disabled={prevButton} style={{height:'37px', border:'none',background:'none'}}> <img src={arrowLeft} alt="right"/></button> 
        </div>
        <div className="col-md-6 col-sm-6 " style={{display:'flex',justifyContent:'center'}}>
            <h5 style={{margin:'auto'}}> {indexGuide+1}/{props.variant[tabsIndex].guides.length} </h5> 
        </div>
        <div className="col-md-3 col-sm-3 " style={{display:'flex',justifyContent:'flex-end'}}>
            <button onClick={nextStep} disabled={nextButton} style={{height:'37px', border:'none',background:'none'}}><img src={arrowRight} alt="left"/></button><a></a> </div>
    </div></div>
    </div>
    </div>
       : <h2>loading</h2>

      
       const imageData = props.variant.length>0? 
       <img src={image} className="SliderHp"/> : <h2>loading..</h2>
  return (
    <div> 
    <div className="wrapper">

     <div className="row" style={{zIndex:'999'}}>
       {tabs}
      </div>
      </div>
       
           {variantData}
           
        
    </div>
  );
  // }
};

export default PSection3Com;
