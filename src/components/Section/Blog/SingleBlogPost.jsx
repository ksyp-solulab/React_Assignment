import React from 'react'
import LeftSlider from '../../Sliders/LeftSlider';
import Style from './singleBlogPost.module.css';
import Style3 from './blogPostCard.module.css'
import Style2 from './blog.module.css'
import PostMeta from './PostMeta';
import {FaStar} from 'react-icons/fa'
function SingleBlogPost() {
  return (
    <section className="container">
        <div className="row">
            <div className="col-sm-3">
                <LeftSlider />
            </div>
            <div className="col-sm-9">
                <div className={Style.blogPostArea}>
                    <h2 className={Style2.title}>Latest From our Blog</h2>
                    <div className={Style3.singleBlogPost}>
                         <h3>Girls Pink T Shirt arrived in store</h3>
                        <PostMeta />
                        <a href="">
                            <img src={require('./../../../images/blog/blog-one.jpg')} alt="" />
                        </a>
                        <p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p> <br />

						<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p> <br/>

						<p>
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p> <br/>

						<p>
								Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
						</p>
                        <div className={Style.pagerArea + " "+ "float-end"}>
                            <button>Prev</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
                <div className={Style.ratingArea}>
                    <ul className={Style.ratings}>
                        <li className={Style.rateThis}>Rate this item :</li>
                        <li>
                            <button><FaStar className={Style.color}/></button>
                            <button><FaStar className={Style.color}/></button>
                            <button><FaStar className={Style.color}/></button>
                            <button><FaStar /></button>
                            <button><FaStar /></button>
                        </li>
                        <li className={Style. color}>(6 votes)</li>
                    </ul>
                    <ul className={Style.tag}>
                        <li>TAG:</li>
                        <li><a className={Style.color} href="">pink <span></span></a></li>
                        <li><a className={Style.color} href="">Tshirt <span></span></a></li>
                        <li><a className={Style.color} href="">Girls <span></span></a></li>
                    </ul>
                </div>
                <div className={Style.socialShare}>
                    <a href=""><img src={require('./../../../images/blog/socials.png')} alt="" /></a>
                </div>
                <div className={Style.replyBox}>
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>Leave a reply</h2>
                            <form action="">
                                <div className="blankArrow">
                                    <label>Your Name</label>
                                </div>
                                <span>*</span>
                                <input type="text" placeholder="write Your Name ..." />
                                <div className="blankArrow">
                                    <label>Email Address</label>
                                </div>
                                <span>*</span>
                                <input type="text" placeholder="Your email address ..." />
                                <div className="blankArrow">
                                    <label>Web Site</label>
                                </div>
                                <span>*</span>
                                <input type="text" placeholder="Enter website url    ..." />
                            </form>
                        </div>
                        <div className="col-sm-8">
                            <div className={Style.textArea}>
                                <div className="blankArrow">
                                    <label>Other Details</label>
                                </div>
                                <textarea name="message" rows="11"></textarea>
                                <button className={Style.btn}>Post comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleBlogPost