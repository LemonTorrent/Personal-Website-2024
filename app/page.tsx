import Image from 'next/image'
import Navbar from './components/navigation/navbar'
import { useEffect, useState } from 'react';
import EmailForm from './components/email-form/EmailForm';
// import useWindowDimensions from './components/UseWindowDimensions'

// const {height, width} = useWindowDimensions()

export default function Home() {
  // const [height, setHeight] = useState(useWindowDimensions().height)
  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="homepage-styling h-screen">
    
      <main className="content flex flex-col p-24 pb-0 pt-32">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex padding:0"> */}
        <div className="">
          <main>
            
            <div className="flex flex-col">
              <div className="image-box-home content flex justify-center items-center w-full pb-10">
                <Image
                    src="/images/programming.png"
                    alt="Profile Picture"
                    width="300"
                    height="200"
                />
              </div>
            
              <div className="text-box-main">
                <h1>Hello! Welcome to the Lemon Life</h1>
                <p> My name is Nicole and I am a software engineer based out of Portland, OR. For any inqueries or offers for employment, please reach out to nyarbrough14@gmail.com</p>
              </div>
            </div>

            {/* <div>
              <EmailForm />
            </div> */}
            
          </main>
        </div>
      </main>
    </div>
  )
}
