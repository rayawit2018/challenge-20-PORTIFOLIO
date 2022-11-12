import React from 'react'
import {useNavigate} from "react-router-dom";


function PortifolioItem({image, name, id}) {
  const navigate= useNavigate();
  return (
    <div className='portfolioItem'
     onClick={()=>{
       navigate("/portifolio/" + id);
     }}>
      <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
       <h1> {name}</h1>
    </div>
  )
}

export default PortifolioItem;