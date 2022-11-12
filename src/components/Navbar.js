import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css"
import "../styles/Footer.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false);
    const location =useLocation();

    useEffect(()=>{
        setExpandNavbar(false);

    },[location]);

  return (
    <div className ="navbar" id= {expandNavbar ? "open": "close"}>
        <div className='toggleButton'>
            <button 
               onClick ={()=>{
                   setExpandNavbar((prev)=>!prev);
               }}
               >
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
   
            <Link to ="/"> About me</Link>
            <Link to ="/resume"> Resume</Link>
            <Link to ="/contact"> Contact</Link>
            <Link to ="/portifolios ">Portifolios</Link>
      
 
        </div>
        
     </div>
  );
}

export default Navbar;