import React,{useState, useRef, useEffect} from 'react'
import {TweenMax, Power1} from "gsap"

export const Page2  = () => {


    let animate1 = useRef(null)

    useEffect(() =>{


     
        TweenMax.from(animate1, 2, {opasity:0, y:100, ease: Power1.easeOut}, 9)
       
    
        //   console.log(el2) 
       }, []) 

return (
<>
<div ref={el => (animate1 = el)} >
<h3>Привет. </h3>
<p>Ты продолжаешь работать над своей программой.

    Напомни, какой запрос на обучение у тебя был. 
       
    
   Напомни, какой запрос на обучение у тебя был. 

    
   Напомни, какой запрос на обучение у тебя был. </p>

  
   </div>


</>

)


}