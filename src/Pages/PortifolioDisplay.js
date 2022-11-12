import React from 'react';
import {useParams} from "react-router-dom";
import {portifolioList} from '../helpers/PortifolioList';
import GitHubIcon from "@mui/icons-material/GitHub";


function PortifolioDisplay() {
    const {id} =useParams();
    const portifolio =portifolioList[id];
  return (
    <div className='project'>
        <h1> {portifolio.name}</h1>
        <imgss src ={portifolio.image} alt="image" />
        <p> Skills: {portifolio.skills}</p>
        <GitHubIcon/>
        
    </div>
  );
}

export default PortifolioDisplay;