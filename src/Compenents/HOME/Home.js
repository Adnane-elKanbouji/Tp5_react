import React from 'react'
import NavBar from "../NavBar/NavBar"
import logo1 from "./logo.svg"

import logo2 from "./logo1.jpg"
import "./Home.css"


export default function Home() {
  return (
    <div className='fluida' >
     
    
    <h1 style={{fontSize:"4eM",margin:"10% 0% ",fontFamily:"sans-serif",color:"#61dafb"}} >bienVenu <br /> sur My site</h1>

   
   <img src={logo2}   className='App-logo' alt="logo" />
   <img src={logo1} style={{width:"20%",border:"0px"}} className="App-logo" alt="" />

    </div>
  )
}
