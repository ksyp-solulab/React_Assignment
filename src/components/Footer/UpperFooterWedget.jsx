import React from 'react'
import Style from './upperFooterWidget.module.css'

function UpperFooterWedget(props) {
  return (
    <div className={props.Cla}>
        <div className="singleWidget">
            <h2 className={Style.h2}>{props.Title}</h2>
            <ul className={Style.navList}>
                {
                    props.List.map((item, index) =>{
                        return(
                            <li key={index}><a href="#">{item}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default UpperFooterWedget