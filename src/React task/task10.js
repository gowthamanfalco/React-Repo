import React, { useState } from "react";
import './task10.css';


function Task10(){
    let[mango,setMango]=useState(0)
    let[banana,setBanana]=useState(0)

    
    return(
        <>
        <div className="xm">
           <center> <h1 className="pp"> Bob ate   {mango}   mango  {banana}  banana</h1></center>
           <img src="http://www.clipartbest.com/cliparts/dc7/Ldg/dc7LdgqMi.png" alt="img" className="zg"></img>           
           <img src="https://webstockreview.net/images/mango-clipart-mango-indian-3.png" alt="img" className="gz"></img>
            <button onClick={()=>setMango(mango+1)} id="xc" className="bg-primary">Eatmango</button>
            <button onClick={()=>setBanana(banana+1)} id="ew" className="bg-primary">Eatbanana</button>
        </div>
        
        </>
        
    )
}
export default Task10