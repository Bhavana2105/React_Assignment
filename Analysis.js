import React from 'react'
import "./Analysis.css";

function Analysis(props) {
  return (
    <div className='gf'>
        <div className='image'>
            <img src={props.img}/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default Analysis;