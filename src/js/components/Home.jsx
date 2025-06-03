import React,{useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//import container, { col, Row } from "./Grid";
//import TimeClock from "./TimeClock";

 const Home = () => {
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
     const startCounter = setInterval(()=>{
        setSeconds(previousSeconds=>previousSeconds+1)
     console.log(seconds)
    },1000)
    return()=>clearInterval(startCounter)},[])
    const formatTime = (time)=>{
       return time.toString().padStart(6,"0").split("")
    }
    const digits=formatTime(seconds)
    return (
       <div className="d-flex justify-content-center">
        <div className="text-center bg-dark" style={{height:"250px", width:"900px", margin:"200px"}}>
            <div id="container" className= "d-flex flex-column align-items-center flex-md-row justify-content-between text-center">
               {digits.map((digits,index)=>(
                <div key={index} className="bg-dark" style={{height:"200px", width:"100px", margin:"20px"}}>
                    <p style={{ fontSize: "110px", color: "white" }}>{digits}</p>
                </div>
               ))}
            </div>
        </div>
       </div>
    );
};
export default Home