import React from 'react';
import "../styles/Resume.css"

function Resume() {
  return (
    <div className='home'> 
        <div className='about'> 
        <h2> Resume</h2>
       
     </div>
        
        <div className='skills'> 
        
         <ol className='list'>
             <li className ='item'>
                 <h2> Front-End</h2>
                 <span> 
         HTML, CSS, React, Bootsrap, MaterialUI

                 </span>

             </li>
             <li className='item'>
                 <h2> Back-End</h2>
                 <span> 
         GraphQL,ApolloServer,NodeJs, MySQL, SQL, ExpressJS,MongoDB

                 </span>

             </li>
             <li className='item'>
                 <h2> Programming Languages</h2>
                 <span> Javascript,Python, R</span>

             </li>



         </ol>
        
        </div> 

        
        </div>
  );
}
export default Resume;