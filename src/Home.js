import React, { useEffect } from "react";

import catalogue from "./catalogue";
import { Link, useActionData } from "react-router-dom";

export default function Home({setItem}) {

    return  (
        <>  
            <section id="hero" className="flex h-[95vh] justify-evenly max-w-[80rem] items-center mb-2 mx-auto md:flex-row flex-col-reverse animate-fade-down animate-once animate-delay-500 px-1">
                <div className="flex items-start justify-center flex-col h-full px-2">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl underline">Winter re:Collection</h2>
                    <p className="font-semibold -order-1">Check our newest batch featuring our biggest brands yet!</p>
                    <Link to="/shop" className="font-bold bg-white px-2 py-1 border-2 mt-10 border-black hover:bg-black hover:text-white">SHOP NOW <i class="pl-1 fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="relative w-full md:w-72 h-full md:flex md:items-center"> 
                    <img src={require('./img/hero1.jpg').default} className="w-96 h-fit md:w-72 md:h-80 object-cover static lg:absolute top-[10rem] right-20 border-2 border-black mx-auto"></img>
                    <img src={require('./img/hero2.jpg').default} className="w-60 h-72 object-cover hidden md:visible md:absolute top-[20rem] left-[5rem] lg:block border-2 border-black"></img>
                </div>
            </section>
            <section className="bg-white w-full py-20 flex flex-col items-center gap-10">
                <div className="max-w-[80rem] mx-auto flex flex-col items-center gap-10 reveal"> 
                    <h3 className="text-center font-bold text-4xl">Explore new arrivals</h3>
                    <ul className="grid md:grid-cols-3 gap-4 p-2 grid-cols-1 grid-flow-row">
                        {catalogue.slice(4,7).map((item) => {
                            return (
                                <li>
                                    <Link to="/showcase" className="cursor-pointer" onClick={() => setItem(item)}>
                                        <article className="flex flex-col items-center font-semibold text-lg hover:border-2 border-black py-5 hover:shadow-lg">
                                            <img className="w-80" src={item.img}></img>
                                            <h4>{item.name}</h4>
                                            <p><data value={item.price}>${item.price}</data></p>
                                        </article>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="max-w-[80rem] mx-auto flex-col items-center gap-10 hidden md:flex reveal">
                    <h3 className="text-center font-bold text-4xl">Featured Products</h3>
                    <ul className="grid grid-cols-3 grid-rows gap-2">
                        {shuffleArray(catalogue).slice(0,6).map((item) => {
                            return (
                                <li>
                                    <Link to="/showcase" className="cursor-pointer" onClick={() => setItem(item)}>
                                        <article className="flex flex-col items-center font-semibold text-lg hover:border-2 border-black py-5 text-center hover:shadow-lg">
                                            <img className="w-80" src={item.img}></img>
                                            <h4 className="w-[16rem]">{item.name}</h4>
                                            <p><data value={item.price}>${item.price}</data></p>
                                        </article>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <section className="flex justify-evenly flex-col-reverse md:flex-row-reverse max-w-[80rem] items-center my-4 mx-auto h-fit md:h-[27rem] gap-4 p-4 reveal">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="font-bold text-4xl mx-auto">News Letter</h3>
                    <p className="font-semibold text-center md:text-left">Sign up for our newsletter stay updated with promotional sales and new releases!</p>
                    <form className="flex flex-col md:flex-row items-center gap-4 w-fit md:w-full pt-2 md:justify-start justify-center">
                        <input type="email" className="w-full md:w-[15rem] border-black border-2 outline-none px-2 py-2 font-semibold" spellCheck={false} placeholder="123@lyfestyle.com"></input>
                        <button className="bg-white text-black font-bold px-2 py-1 border-black border-2 hover:bg-black hover:text-white">Sign Up</button>
                    </form>
                </div>
                <div className="relative w-64 h-full flex items-center"> 
                    <img src={require('./img/contact2.jpg').default} className="w-60 h-72 object-cover static xl:absolute top-[3rem] right-20 border-2 border-black"></img>
                    <img src={require('./img/contact1.jpg').default} className="w-60 h-64 object-cover hidden md:absolute top-[9rem] left-[5rem] xl:block border-2 border-black"></img>
                </div>
            </section>
        </>
    )
}


function shuffleArray(array) {
    let temp = [...array]
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp
}