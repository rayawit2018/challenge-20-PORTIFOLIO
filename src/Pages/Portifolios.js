
import React from 'react';
import PortifolioItem from '../components/PortifolioItem';
// import Hero from '../assets/hero.png';
import { portifolioList } from '../helpers/PortifolioList';
import "../styles/Portifolios.css";

function Portifolios() {
  return (
    <div className="portifolios"> 
    <h1> My portfolios</h1>
    <div className='portifolioList'>
     {portifolioList.map((portifolio, idx)=>{
       return <PortifolioItem id = {idx} name={portifolio.name} image={portifolio.image}/>;

     })}
    </div>
    
    </div>
  );
}

export default Portifolios;















// import React from 'react';
// import {VerticalTimeline,
//      VerticalTimelineElement,
//     } from "react-vertical-timeline-component";

// import "react-vertical-timeline-component/style.min.css";
// function Portfolio() {
//   return (
//     <div className='experience'>
//         <VerticalTimeline lineColor='#3e497a'>
//             <VerticalTimelineElement className='vertical-timeline-element--education'
//              date="March 24- Nov12,2022"
//              iconStyle={{background: "#3e497a", color: "#fff"}}></VerticalTimelineElement>
// <h3 className='vertical-timeline-element-title'> UPEN Coding Bootcamp,  PA </h3>

//  <VerticalTimelineElement className='vertical-timeline-element--education'
//              date="March 24- Nov12,2022"
//              iconStyle={{background: "#3e497a", color: "#fff"}}></VerticalTimelineElement>
// <h3 className='vertical-timeline-element-title'> UPEN Coding Bootcamp,  PA </h3>

//  <VerticalTimelineElement className='vertical-timeline-element--education'
//              date="March 24- Nov12,2022"
//              iconStyle={{background: "#3e497a", color: "#fff"}}></VerticalTimelineElement>
// <h3 className='vertical-timeline-element-title'> UPEN Coding Bootcamp,  PA </h3>
        
//         </VerticalTimeline>
//     </div>
//   )
// }

// export default Portfolio;