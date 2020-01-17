import React,{useState, useRef, useEffect} from 'react';
import './App.css';
import { Switch, Route,  withRouter, Redirect, useHistory, useRouteMatch } from 'react-router-dom'
import {TweenMax, Power3} from "gsap"

import { createGlobalStyle } from 'styled-components'

import {Page1} from './Pages/Page1'

 import {Page2} from './Pages/Page2'

 import {Page3} from './Pages/Page3'


 import { Steps } from 'antd';
 import s from './App.module.css'

 import { GlobalStyle } from './GlobalStyle.js'









// import Demo from "./input"
function App() {


 
  // const updateNow =(value)=>{
  //   settagoto(value)
  
  let menu = useRef(null)
 

const [takeIt, settakeIt] = useState("./");
const [Stepscurrent, setStepscurrent] = useState(0);

const testAnimate = () =>{console.log(1)
  TweenMax.to( menu,  0.8, {width: "100vw", ease: "power3.inOut", repeat:1, yoyo:true} )
 

}
// function updateNow (value){
  

//   debugger
//   settakeIt(value)
//   debugger


 
//   }
  

  // useEffect(() =>{
  //   TweenMax.to( menu2,  0.8, {width: "100vw", ease: "power3.inOut", repeat:1, yoyo:true} )


  // },[])

  // debugger
  //  settakeIt(takeIt)
 
  // setTimeout(() => { 
      
  // / history.push(takeIt)
      
  //   },500)
  //     debugger
  // },[])

 

  const { Step } = Steps;
  let history = useHistory();


  const gotopage1 =(e) => {
    setStepscurrent(0)
    testAnimate()
    e.preventDefault()
    
    setTimeout(() => { 
      
    
    history.push("./")
    
    },500)
  }
 
  const gotopage2 =(e) => {
    testAnimate()

    setStepscurrent(1)
    e.preventDefault()
    
    setTimeout(() => { 
      
    
    history.push("./Page2")
    
    },500)
  }


  const gotopage3 =(e) => {
    testAnimate()

    setStepscurrent(2)
    e.preventDefault()
    
    setTimeout(() => { 
      
    
    history.push("./Page3")
    
    },500)
  }




  return (
<>
<div className={s.body}>
<div ref={ el => (menu = el)} className={s.menu}></div>
      <div className={s.grid_parrent}>
        <div className={s.grid_parrent_steps} >
  
    <Steps direction="vertical" current={Stepscurrent}>
    <Step   className={s.grid_parrent_cheldren_steps}   onClick={gotopage1 }/>
    <Step  className={s.grid_parrent_cheldren_steps}   onClick={gotopage2 }/>
    <Step  className={s.grid_parrent_cheldren_steps}   onClick={gotopage3 }/>
  </Steps>
  </div>

  <div className={s.grid_parrent_page}>


 <div className={s.grid_test}>
 <Switch>
 <Route props={gotopage1} path='/Page3' component={Page3}/>
 
 </Switch>
 <Switch>
 <Route     path='/' component={Page1}/>
 </Switch>
 

 <Switch>
 <Route  path='/Page2' component={Page2}/>


 </Switch>



 

 </div>




  </div>
  </div>
  </div>
  </>
  );
}

export default App;
