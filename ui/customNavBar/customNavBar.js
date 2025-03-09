"use client";

import { useRouter } from 'next/navigation'
import './customNavBar.css'
import { useEffect, useState } from 'react'


export default function CustomNavBar() {

    const router = useRouter()

    const [ selected, setSelected] = useState(0)

    useEffect( ()=> {
        document.querySelector('nav ul').classList.remove('open')
    }, [ selected])

    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log( 'width: ', width)

    return (
        <nav>
            <svg onClick={() => document.querySelector('nav ul').classList.toggle('open')} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M20 17H4v2h16v-2zm-10-2h10v-2H10v2zM4 9v2h16V9H4zm6-2h10V5H10v2z"></path> </g> </g></svg>
            <ul>
                <li
                    onClick={() => {
                        router.push( '/')
                        setSelected( 0);
                    }}
                    style={{
                        borderBottom: selected===0?'1px solid green':undefined,
                        color: selected===0?'green':undefined
                    }}
                >
                    Home
                </li>
                <li
                    onClick={() => {
                        router.push( '/projects')
                        setSelected( 1);
                    }}
                    style={{
                        borderBottom: selected===1?'1px solid green':undefined,
                        color: selected===1?'green':undefined
                    }}
                >
                    Projects
                </li>
                <li
                    onClick={() => {
                        router.push( '/blog')
                        setSelected( 2);
                    }}
                    style={{
                        borderBottom: selected===2?'1px solid green':undefined,
                        color: selected===2?'green':undefined
                    }}
                >
                    Blog
                </li>
                <li
                    onClick={() => {
                        router.push( '/live_projects')
                        setSelected( 3);
                    }}
                    style={{
                        borderBottom: selected===3?'1px solid green':undefined,
                        color: selected===3?'green':undefined
                    }}
                >
                    Live projects
                </li>
            </ul>
        </nav>
    )
}

