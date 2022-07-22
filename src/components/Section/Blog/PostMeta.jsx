import React from 'react'
import Style from './blogPostCard.module.css'
import {FaUserAlt,FaClock,FaCalendarAlt,FaStar, FaStarHalfAlt} from 'react-icons/fa';

function PostMeta() {
  return (
    <div className={Style.postMeta}>
            <ul>
            <li><FaUserAlt/>Mac Doe</li>
			<li><FaClock />1:33 PM</li>
			<li><FaCalendarAlt />DEC 5,2013</li>
            </ul>
            <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </span>
        </div>
  )
}

export default PostMeta