import React,{useEffect,useState} from 'react'

const ScrollToTop = () => {
    const [backToTop,setBackToTop] = useState(false);
    useEffect = (() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            }
        });
    },[]);
    const ScrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
        <React.Fragment>
            { backToTop && (<button onClick={ScrollTop}>^</button>)}
        </ React.Fragment>
  )
}

export default ScrollToTop