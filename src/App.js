import React from "react";
import { useState } from "react";
import { HashRouter, Route, Routes, Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Shop from "./Shop";
import Showcase from "./Showcase";
import Checkout from "./Cart";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
    const [item, setItem] = useState();
    const [cart, setCart] = useState([]);

    return(
        <>
            <HashRouter>
                <Navbar cart={cart}/>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home setItem={setItem} />}></Route>
                        <Route path="shop" element={<Shop setItem={setItem} />}></Route>
                        <Route path="showcase" element={<Showcase setItem={setItem} item={item} cart={cart} setCart={setCart}/>}></Route>
                        <Route path="cart" element={<Checkout cart={cart} setCart={setCart}/>}></Route>
                    </Route>
                </Routes>
                <Footer />
            </HashRouter>
            <Outlet />
        </>
    )
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animate-fade-down");
        reveals[i].classList.add("animate-once");
      } else {
        reveals[i].classList.remove("animate-fade-down");
        reveals[i].classList.remove("animate-once");
      }
    }
}
  
  window.addEventListener("scroll", reveal);