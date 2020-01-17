import React,{useState, useRef, useEffect} from 'react'
import {TweenMax, Power1} from "gsap"

export const Page1  = () => {


    let animate1 = useRef(null)

    const gotopage1 =(e) => {
        setStepscurrent(0)
        testAnimate()
        e.preventDefault()
        
        setTimeout(() => { 
          
        
        history.push("./")
        
        },500)
      }
     


    useEffect(() =>{


     
        TweenMax.from(animate1, 2, {opasity:0, y:100, ease: Power1.easeOut}, 5)
       
    
        //   console.log(el2) 
       }, []) 

return (
<>
<div ref={el => (animate1 = el)} >

<h3>Привет.</h3> 
<p>Скачивай задание во вложение и заполни его.<br/>
Как это сделать ты узнаешь, посмотрев примеры
</p>

<button onClick={gotopage1()}>Пример1</button>

  
   </div>


</>

)


}