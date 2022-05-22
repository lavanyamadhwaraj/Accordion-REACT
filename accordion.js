import React , {useState} from 'react';
import {questions} from './api';
import './accordion.css';
import Myaccordion from './Myaccordion';


function Accordion() {

const [data, setData]=useState(questions);
    return ( <>
    {
        data.map((curElem)=>{
        const { id } = curElem;
        return <Myaccordion key={curElem.id} {...curElem} />
        })
    }
</>
)
}

export default Accordion