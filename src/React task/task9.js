import React, { useState } from "react";




function Task9(){
    let[number,setNumber]=useState(0)
    return(
        <>
        <center>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>increase</button>
        </center>
        
    </>)
    
}
export default Task9