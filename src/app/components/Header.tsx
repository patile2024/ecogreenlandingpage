'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "Giới thiệu",
            src: "/icons/introduction.png",
        },
        {
            id: 2,
            link: "Vị trí",
            src: "/icons/position.png",
        },
        {
            id: 3,
            link: "Tiện ích",
            src: "/icons/tag.png",
        },
        {
            id: 4,
            link: "Dịch vụ",
            src: "/icons/message.png",
        },
        {
            id: 5,
            link: "Liên hệ",
            src: "/icons/contact.png",
        },
    ];
    return (
        <div className="flex items-center w-full h-20 px-4 text-black fixed nav">
            <div className="items-center">
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                <h1 className="text-5xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Logo
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex w-full items-center justify-items-center justify-center">
                {links.map(({ id, link, src }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-yellow-500 duration-200 link-underline"
                    >
                        <a href={link} className="w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg items-center">
                            <img className="flex-none w-4 h-full" src={src} />
                            <span className="ml-2 truncate">{link}</span>
                        </a>
                    </li>

                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-yellow-500 md:hidden items-center"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-yellow-500 text-yellow-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link} className="text-black">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}