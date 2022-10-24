import React from "react";
import { useState } from "react";
import './clock.css';
function Clock(){
let time=new Date().toLocaleTimeString();
let date=new Date().toLocaleDateString();
const [ctime,setctime]=useState(time);
const [cdate,setDate]=useState(date);
const UpdateTime=()=>{
                    date=new Date().toLocaleDateString();
                    setDate(date);

  time=new Date().toLocaleTimeString();
  setctime(time);
};
setInterval(UpdateTime,1000)
return (
                    // <App time={ctime}/>
 <div className="Main">
                    
                    <h3 className="time">{ctime}</h3>
                    <h2 className="date">{date}</h2>
</div> 
)

}

export default Clock;