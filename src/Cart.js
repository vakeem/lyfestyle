import React from "react";
import { useState, useEffect } from "react";

export default function Checkout({cart, setCart}) {
    const [total, setTotal] = useState(0);

    function handleRemove(obj, size) {
        let temp = [...cart]
        --obj.sizes[size]
        cart[cart.indexOf(obj)] = obj
        setCart(temp)
        Object.values(obj.sizes)
        if (!Object.values(obj.sizes).reduce((a, b) => a + b, 0)) {
            setCart(temp.filter((item) => item !== obj))
        }
    }

    function totalItem(obj, quantity) {
        return quantity * obj.price
    } 

    useEffect(() => {
        setTotal(totalPrice(cart))
    },[cart])

    return (
        <>
            <section className="w-full bg-white py-5 min-h-[100vh] px-2">
                <h2 className="max-w-[80rem] mx-auto text-3xl font-bold py-2">CART</h2>
                <div className="max-w-[80rem] mx-auto flex flex-col gap-2">
                    { !cart.length > 0
                    ? 
                    <>
                        <p className="font-semibold h-[50vh] pt-10">There are no items in the cart.</p>
                    </>
                    :
                    <>
                        {cart && cart.map((item) => {
                            return (
                                <>
                                    {(item.item.type === 'clothes')
                                    ?
                                    <div className="border-2 border-black p-5 w-full"> 
                                        <div className="flex justify-between w-full items-center h-fit">
                                            <div className="flex flex-row-reverse items-center gap-5">
                                                <p className="text-2xl font-bold">{item.item.name}</p>
                                                <img className="w-32" src={item.item.img[0]}></img>
                                            </div>
                                        </div>
                                            <div className="flex flex-row-reverse pl-10">
                                                <div className="flex flex-col w-[30rem] gap-4">
                                                {
                                                    item.sizes.small  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: SMALL</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.small}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.small)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'small')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.medium   
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: MEDIUM</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.medium}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.medium)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'medium')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.large  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: LARGE</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.large}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item, item.sizes.large)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'large')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                
                                                </div>
                                            </div>
                                    </div>
                                    :
                                    <div className="border-2 border-black p-5 w-full"> 
                                        <div className="flex justify-between w-full items-center h-fit">
                                            <div className="flex flex-row-reverse items-center gap-5">
                                                <p className="text-2xl font-bold">{item.item.name}</p>
                                                <img className="w-32" src={item.item.img[0]}></img>
                                            </div>
                                        </div>
                                            <div className="flex flex-row-reverse pl-10">
                                                <div className="flex flex-col w-[30rem] gap-4">
                                                {
                                                    item.sizes.eight  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: 8 US</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.eight}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.eight)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'eight')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.nine   
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: 9 US</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.nine}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.nine)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'nine')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.ten  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: 10 US</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.ten}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.ten)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'ten')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.eleven  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: 11 US</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.eleven}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.eleven)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'eleven')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                                {
                                                    item.sizes.twelve  
                                                    ?<div className="grid grid-cols-4 items-center align-middle w-full mx-auto justify-items-center font-semibold group border-b-2 hover:border-black">
                                                        <p className="justify-self-start"><span className="text-xs">SIZE</span>: 12 US</p>
                                                        <p className="mx-auto"><span className="text-xs">UNITS</span>: {item.sizes.twelve}</p>
                                                        <p  className="mx-auto">$ {totalItem(item.item,item.sizes.twelve)}</p>
                                                        <button className="w-fit p-2 grid text-lg hover:text-red-600" onClick={() => handleRemove(item, 'twelve')}><i class="fa-solid fa-x"></i></button>
                                                    </div>
                                                    : <></>
                                                }
                                
                                                </div>
                                            </div>
                                    </div>}
                                </>
                            )
                        })}
                        <section className="flex justify-end my-2">
                            <div className="flex flex-col justify-end gap-3">
                                <h4 className="w-full font-semibold text-lg text-right">TOTAL: <span className="font-bold text-2xl">$ {numberWithSpaces(total)}</span></h4>
                                <a className="w-fit font-bold text-2xl border-2 border-black px-3 py-2 hover:bg-black hover:text-white hover:shadow-lg cursor-pointer">PROCEED TO CHECKOUT</a>
                            </div>
                        </section>
                    </>
                    }
                </div>
            </section>
        </>
    )
}


function totalPrice(obj) {
    let amount = 0
    for (let i = 0; i < obj.length; i++) {
      amount +=  obj[i].quantity * obj[i].item.price  
    }
    return amount
    
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}