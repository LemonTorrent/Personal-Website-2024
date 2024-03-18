import Image from 'next/image'
import Navbar from './components/navigation/navbar'
import { useEffect, useState } from 'react';

export default function Home() {
  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="homepage-styling">
    
      <main className="content flex flex-col p-24 pb-0 pt-32">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex padding:0"> */}
        <div className="">
          <main>
            
            <div className="homepage-styling flex flex-col">
              {/* <div className="image-box">
                <Image
                    src="/images/Headshot.jpg"
                    alt="Profile Picture"
                    width="350"
                    height="300"
                />
              </div> */}
            
              <div className="text-box-main">
                <h1>Hello! Welcome to the Lemon Life</h1>
                <p> My name is Nicole and I am a software engineer based out of Portland, OR. For any inqueries or offers for employment, please reach out to nyarbrough14@gmail.com</p>
              </div>
            </div>
            
          </main>
        </div>
      </main>
    </div>
  )
}
