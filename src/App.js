import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Section/Login/Login";
import Cart from "./components/Section/Cart/Cart";
import CheckOut from "./components/Section/CheckOut/CheckOut";
import Products from "./components/Section/Products/Products";
import Blog from "./components/Section/Blog/Blog";
import SingleBlogPost from "./components/Section/Blog/SingleBlogPost";
import ProductDetail from "./components/Section/Products/ProductDetail";
import NotFound404 from "./components/404 Not Found/NotFound404";
import Contact from "./components/ContactUS/Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={ <CheckOut />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleblog" element={<SingleBlogPost />} />
          <Route path="/productdetails" element={<ProductDetail />} />
          <Route path="*" element={<NotFound404/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop smooth  style={{background: '#FE980F'}}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
