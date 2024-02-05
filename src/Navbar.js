import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({cart}) {

    const [pinned, setPinned] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(totalItems(cart))
    },[cart])

    useEffect(()=>{
        const el = document.querySelector("#nav")
        const observer = new IntersectionObserver( 
        ([e]) => e.intersectionRatio < 1 ? setPinned(false) : setPinned(true),
        { threshold: [1] }
        );

        observer.observe(el);
    },[])

    return(
        <nav id="nav" className={`w-full h-20 md:h-28 ${pinned ? "bg-indigo-200" : "bg-white shadow-lg"} sticky py-5 top-[-1px] z-10`}>
            <div className={`flex justify-between items-center h-full max-w-[80rem]  ${pinned ? "border-b-2 border-black" : ""}  mx-auto px-4`}>
                <h1 className="font-bold text-3xl"><Link to="/" className="hover:font-black">LYFESTYLE</Link></h1>
                <div className="flex gap-6 text-lg font-semibold h-full items-center">
                    <ul className={`md:flex hidden gap-10 items-center h-full ${pinned ? "border-black border-r-2" : ""}  pr-6`}>
                        <li>
                            <Link to="/" className="p-2 hover:font-bold">HOME</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="p-2 hover:font-bold">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/" className="p-2 hover:font-bold">ABOUT</Link>
                        </li>
                    </ul>
                    <div className="md:block hidden">
                        <Link to="/cart" className="p-2 hover:font-bold"><i className="fa-solid fa-bag-shopping pr-2 text-[1.1rem]"></i>CART ({count})</Link>
                    </div>
                    <div className="md:hidden visible flex h-full items-center gap-5">
                        <button onClick={() => setMobile(!mobile)} className={`text-2xl h-full ${!mobile && pinned ? "border-black border-l-2" : ""} pl-5 pr-2`}>{!mobile ? <i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-x"></i>}</button>
                    </div>
                </div>
            </div>
            {mobile && 
                <div className="h-[100vh] top-0 absolute bg-white w-full flex flex-col justify-center items-center -z-20">
                    <ul className="md:hidden flex gap-20 items-center h-full pr-6 flex-col justify-center font-bold text-2xl">
                        <li onClick={() => setMobile(false)}>
                            <Link to="/">HOME</Link>
                        </li>
                        <li onClick={() => setMobile(false)}>
                            <Link to="/shop">SHOP</Link>
                        </li>
                        <li onClick={() => setMobile(false)}>
                            <Link to="/">ABOUT</Link>
                        </li>
                        <li onClick={() => setMobile(false)}>
                            <Link to="/cart"><i className="fa-solid fa-bag-shopping pr-2 text-[1.5rem]"></i>CART ({count})</Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    )
}

function totalItems(obj) {
    let count = 0
    for (let i = 0; i < obj.length; i++) {
      count +=  obj[i].quantity
    }
    return count
}