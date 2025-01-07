import { useEffect, useState } from "react"

export const Timer = ()=>{
     
     const [time,setTime] = useState(0);
     
     // useEffect(()=>{   
     //  const timeout = setInterval(()=>{
     //      setTime(time+1);
     //  },1000)    
     //  return()=>{
     //    clearInterval(timeout);  
     //  }
     // },[time])
     
     const handleStart = ()=>{
          setInterval(()=>{
               setTime((t)=>t+1);
           },1000)   
     }
     const handleStop =()=>{
     //   clearInterval(time);
         
     }
     const handleReset =()=>{
          // clearInterval(time); 
         setTime(0); 
     }
     return(
          <div style={{display:"flex",
            flexDirection:"column",
          border:"2px solid black"}}>
           <h2>{time}</h2>
           <div style={{display:"flex",border:"2px solid black"}}>
           <button onClick={()=>handleStart()} >start</button>
           <button onClick={()=>handleStop()} >stop</button>
            {/* <button onClick={()=>handleReset()} >Restart</button>  */}
           <button onClick={()=>handleReset()} >Reset</button>
           </div>
          </div>
     )
}