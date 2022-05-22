import React, {useState} from 'react';
import {question} from './api';


const Myaccordion = ({id, question, answer}) => {
  const [show, setShow]=useState(false);
  return (
    <>
     <div className="main"> 
    <div onClick={()=>setShow(!show)}>{show? "-":"+"}{question}</div>
     </div>
     
    {
      show  && <p className='answers'>{answer}</p>
    }
    </>
  )
}
export default Myaccordion
