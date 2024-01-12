import Image from "next/image"
export default function Home() {
  
    return (
      // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="page-contents flex flex-col items-center justify-between p-24 pt-32">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex padding:0"> */}
        <div className="">
          <main>
            <div className="project-styling flex flex-col">
                <div className="image-box flex flex-col items-center w-full">
                    <Image
                        src="/images/Headshot.jpg"
                        alt="Profile Picture"
                        width="350"
                        height="300"
                    />
                </div>
              <div className="text-box">
                <h1 className="text-3xl">About Me </h1>
                <p>I am born an raised in Portland, OR and graduated with my Honors Bachelors of Science from Oregon State University in 2023, majoring in Computer Science and minoring in Ethnic Studies.
                    In addition to completing software engineering internships during my academic careers, I successfully defended my honors thesis studying the Pacific Islander diaspora in Oregon in the 
                    summer of 2023.
                </p>
                <p>In my free time I enjoy dancing hula, reading, or working on a new sewing or knitting project!</p>
              </div>
            </div>
            
          </main>
        </div>
      </main>
    )
  }
  