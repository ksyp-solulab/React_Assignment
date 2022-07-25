import React from 'react'
import LeftSlider from '../../Sliders/LeftSlider'
import Title from '../../Title/Title'
import Pagination from '../Pagination/Pagination'
import Style from './blog.module.css'
import BlogPostCard from './blogPotCard'
function Blog() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <LeftSlider />
                </div>
                <div className="col-sm-9">
                    <div className="blogPostArea">
                        <h2 className={Style.title}>Latest From our Blog</h2>
                        <BlogPostCard title="Girls Pink T Shirt arrived in store" username="Mac Doe" time="1:33 PM" date="Dec 5,2013" image={require('./../../../asset/images/blog/blog-one.jpg')} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                        <BlogPostCard title="Girls Pink T Shirt arrived in store" username="Mac Doe" time="1:33 PM" date="Dec 5,2013" image={require('./../../../asset/images/blog/blog-two.jpg')} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                        <BlogPostCard title="Girls Pink T Shirt arrived in store" username="Mac Doe" time="1:33 PM" date="Dec 5,2013" image={require('./../../../asset/images/blog/blog-three.jpg')} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog