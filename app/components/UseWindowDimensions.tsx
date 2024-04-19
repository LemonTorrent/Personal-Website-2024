"use client";
import { useEffect, useState } from "react";

 // This is a client component 👈🏽

/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 */

// export default function UseWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0}) // <-- don't invoke here

//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions())
//         }

//         handleResize() // <-- invoke this on component mount
//         window.addEventListener('resize', handleResize)
        
//         return () => { window.removeEventListener('resize', handleResize) }
//     }, [])

//     return windowDimensions
// }
