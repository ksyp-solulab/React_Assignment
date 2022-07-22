import React,{useState} from 'react'
import Style from './category.module.css'
import CategoryProduct from './CategoryProduct';
function Category() {
    const [data, setData] = useState("t");
  return (
    <div className={Style.category}>
        <ul className="nav">
            <li onClick={() => {setData("t")}}><a> T-Shirt</a></li>
            <li onClick={() => {setData("b")}}><a> Blazers</a></li>
            <li onClick={() => {setData("s")}}><a> Sunglasses</a></li>
            <li onClick={() => {setData("k")}}><a> Kids</a></li>
            <li onClick={() => {setData("c")}}><a> Polo shirt  </a></li>
            
        </ul>
        
        <div>{
            data === "t" ? <div className="row">
                            <CategoryProduct image={require('../../images/home/gallery1.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery2.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery3.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            </div> : data === "b" ? 
                            <div className="row">
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery3.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery1.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            </div> :data === "s" ? <div className="row">
                            <CategoryProduct image={require('../../images/home/gallery3.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery1.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery2.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            </div>: data === "k" ? <div className="row">
                            <CategoryProduct image={require('../../images/home/gallery2.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery1.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery3.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            </div> : <div className="row">
                            <CategoryProduct image={require('../../images/home/gallery3.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery2.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery4.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            <CategoryProduct image={require('../../images/home/gallery1.jpg')} price="$56" description ="Easy Polo Black Edition" />
                            </div>
            }
        </div>
    </div>
  )
}

export default Category