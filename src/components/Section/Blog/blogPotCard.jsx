import React from 'react'
import Style from './blogPostCard.module.css'
import PostMeta from './PostMeta'
function blogPostCard(props) {
  return (
    <div className={Style.singleBlogPost}>
        <h3>{props.title}</h3>
        <PostMeta />
        <a href="#">
            <img src={props.image} alt="" />
        </a>
        <p>{props.description}</p>
        <button>Read More</button>
    </div>
  )
}

export default blogPostCard