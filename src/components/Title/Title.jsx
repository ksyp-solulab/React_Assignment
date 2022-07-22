import React from 'react'
import './title.css';
function Title(props) {
  return (
        <h2 className={props.name}>{props.item}</h2>
  )
}

export default Title