import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const timer = useRef();
  // useEffect(()=>{
  //  const timeout = setInterval(()=>{
  //      setTime(time+1);
  //  },1000)
  //  return()=>{
  //    clearInterval(timeout);
  //  }
  // },[time])

  const handleStart = () => {
     if(!timer.current){
          timer.current = setInterval(() => {
               setTime((t) => t + 1);
          }, 1000);
     }
  };
  const handleStop = () => {
    clearInterval(timer.current);
    timer.current = null
  };
  const handleReset = () => {
    setTime(0);
    setCount(count+1);
  };

  const handlePause = () => {
     console.log(timer);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      handleStart();
    }
    setCount(count + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
      }}
    >
      <h2  >{time}</h2>
      <div style={{ display: "flex", border: "2px solid black" }}>
        <button onClick={() => handleStart()}>start</button>
        <button onClick={() => handleStop()}>stop</button>
        <button onClick={() => handlePause()} disabled={count > 2}>
          Pause
        </button>
        <button disabled={count > 2} onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
};
