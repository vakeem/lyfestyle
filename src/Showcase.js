import React from "react";
import { useEffect, useState } from "react";

export default function Showcase({item, setCart, cart}) {


    const [current, setCurrent] = useState()
    const [size, setSize] = useState()

    useEffect(() => {
        item && setCurrent(item.img[0])
    }, [])

    function handleCart() {
        let form = document.getElementById("sizes");
        let formValue = form.elements["sizes"].value;
        if (formValue) {
            let selected = formValue
            let temp = {}
            temp.item = {...item}
            temp.sizes = (item.type === 'clothes') ? {"small": 0, "medium": 0, "large": 0} : {"eight": 0, "nine": 0, "ten": 0, "eleven": 0, "twelve": 0}
            temp.quantity = 0
    
            const check = cart.some((i) => i.item.id === item.id) 
    
            function sizeCheck(obj) {
                if (item.type === 'clothes') {
                    selected === "small"
                    ? obj.sizes.small++
                    : selected === "medium"
                    ? obj.sizes.medium++
                    : obj.sizes.large++
                } else {
                    selected === "eight"
                    ? obj.sizes.eight++
                    : selected === "nine"
                    ? obj.sizes.nine++
                    : selected === "ten"
                    ? obj.sizes.ten++
                    : selected === "eleven"
                    ? obj.sizes.eleven++
                    : obj.sizes.twelve++
                }
                obj.quantity++
            }
    
            if (!check) {
                sizeCheck(temp)
                setCart([...cart, temp])
            } else {
                let tempCart = [...cart]
                tempCart.filter((i) => i.item.id === item.id && sizeCheck(i))
                setCart(tempCart)
            }
        } else {
            alert('Please select a size.')
        }
    }

    function handleSize(s) {
        setSize(s)
    }

    function handleImg(img) {
        setCurrent(img)
    }

    function handleTest() {
        var form = document.getElementById("test");
        alert(form.elements["test"].value);
    }

    return (
            item &&
            <div className="w-full bg-white py-10">
                <section className="flex bg-white max-w-[80rem] mx-auto flex-col md:flex-row justify-center gap-2">
                    <div className="flex flex-col gap-4">
                        <img src={current} className="h-fit object-cover w-[50rem]"></img>
                        <div className="flex justify-center gap-2">
                            {item.img.map((img)=> {
                                return (
                                    <img className={`w-[4rem] md:w-36 h-[4rem] md:h-32 object-contain ${current === img ? "border-2 border-black" : ""}`}  src={img} onClick={() => handleImg(img)}></img>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center px-2">
                        <h2 className="text-2xl font-bold">{item.name}</h2>
                        <p className="text-2xl font-semibold">${item.price}</p>
                        <form id='sizes' className="flex flex-col font-semibold gap-2 sm:items-start items-center">
                            <label for="sizes" className="text-lg font-semibold">SIZES:</label>
                            {item.type === 'clothes'
                            ?<div className="flex gap-1 md:gap-2 text-sm md:text-md">
                                <label  className={` ${size === "small" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="small" className="hidden" onChange={() => setSize('small') }/> SMALL</label>
                                <label  className={` ${size === "medium" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="medium" className="hidden" onChange={() => setSize('medium') }/> MEDIUM</label>
                                <label  className={` ${size === "large" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="large" className="hidden" onChange={() => setSize('large') }/> LARGE</label>
                            </div>
                            :<div className="flex flex-wrap gap-2">
                                <label  className={` ${size === "eight" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="eight" className="hidden" onChange={() => setSize('eight') }/> US 8</label>
                                <label  className={` ${size === "nine" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="nine" className="hidden" onChange={() => setSize('nine') }/> US 9</label>
                                <label  className={` ${size === "ten" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="ten" className="hidden" onChange={() => setSize('ten') }/> US 10</label>
                                <label  className={` ${size === "eleven" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="eleven" className="hidden" onChange={() => setSize('eleven') }/> US 11</label>
                                <label  className={` ${size === "twelve" ? "bg-black text-white border-black" : ""} border-2  py-2 px-4 cursor-pointer`}>
                                    <input type="radio" name="sizes" value="twelve" className="hidden" onChange={() => setSize('twelve') }/> US 12</label>
                            </div>}
                        </form>
                        <button onClick={handleCart} className="border-2 bg-white border-black text-black w-fit mx-auto sm:mx-0 py-2 px-4 font-semibold text-lg md:text-2xl hover:bg-black hover:text-white">ADD TO CART</button>
                    </div>
                </section>
                <section className="max-w-[80rem] mx-auto py-10 px-2 flex flex-col gap-4">
                    <h3 className="text-3xl font-bold">BIO</h3>
                    {item.desc
                    ? <p className="font-semibold">{item.desc}</p>
                    : <p className="font-semibold">Item does not have a bio.</p>}
                </section>
            </div>
    )
}