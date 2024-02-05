import React from "react";
import catalogue from "./catalogue";
import { Link } from "react-router-dom";

export default function Shop({setItem}) {

    function handleClick(obj) {
        setItem(obj)
    }

    return (
        <div className="w-full mx-auto bg-white py-10 px-2">
            <h2 className="font-bold text-4xl pb-10 max-w-[80rem] mx-auto">SHOP</h2>
            <div className="grid grid-flow-row md:grid-cols-4 md:grid-row-4 max-w-[80rem] gap-10 mx-auto">
                {catalogue.map((item) => {
                    return (
                        <>
                        <Link onClick={() => handleClick(item)} to="/showcase" className="hover:border-2 flex items-center flex-col text-center justify-between p-2 hover:border-black hover:shadow-lg">
                            <img src={item.img} className=""></img>
                            <p className="font-bold ">{item.name}</p>
                            <p className="font-semibold">${item.price}</p>
                        </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}