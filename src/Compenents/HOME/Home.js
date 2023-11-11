import React from 'react'
import NavBar from "../NavBar/NavBar"
import logo1 from "./logo.svg"

import logo2 from "./logo1.jpg"

export default function Home() {
  return (
    <div >
     
    
    <h1 style={{fontSize:"5em",float:"left",margin:"10% 5% ",fontFamily:"sans-serif",color:"#61dafb"}} >bienVenu <br /> sur My site</h1>
  
   <img src={logo1} style={{width:"20%",border:"0px"}} className="App-logo" alt="" />
     <img src={logo2} className='App-logo' alt="logo" />

    </div>
  )
}
