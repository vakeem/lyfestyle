import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-indigo-100 w-full md:py-10">
                <div className="max-w-[80rem] grid-cols-3 mx-auto place-items-center hidden md:grid">
                    <section className="flex flex-col gap-3 w-60">
                        <h3 className="text-3xl font-bold">LYFESTYLE</h3>
                        <p className="font-semibold">Pariatur cillum dolor sunt Lorem esse est nulla anim qui ipsum irure cillum.</p>
                    </section>
                    <section className="flex flex-col font-semibold w-56 h-full">
                        <h4 className="text-lg font-bold">SOCIALS</h4>
                        <ul className="flex w-full text-4xl gap-4 items-center h-full">
                            <li>
                                <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-square-x-twitter"></i></a>
                            </li>
                        </ul>
                    </section>
                    <section className="flex flex-col gap-2 font-semibold w-60 h-full">
                        <h4 className="text-lg font-bold">CONTACT</h4>
                        <div class="flex flex-col h-full">
                            <p>123 St, Tokyo 1Q2 E34, Japan</p>
                            <p>contact@lyfestyle.com</p>
                            <p>+1 123 456 7890</p>
                        </div>
                    </section>
                </div>
                <div className="max-w-[80rem] h-1 mx-auto border-black border-t-2 md:my-10"></div>
                <div className="max-w-[80rem] flex justify-between mx-auto md:flex-row flex-col items-center py-4 md:p-0">
                    <p className="font-semibold">© 2023 LYFESTYLE, All Rights Reserved</p>
                    <ul className="flex gap-10 font-semibold md:text-md text-xs">
                        <li>
                            <a href="">TERMS & CONDITIONS</a>
                        </li>
                        <li>
                            <a href="">PRIVACY POLICY</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}  