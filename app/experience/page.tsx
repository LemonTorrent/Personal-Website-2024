export default function Home() {
  
    return (
      // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="page-contents flex flex-col items-center justify-between p-24 pt-32">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex padding:0"> */}
        <div className="">
          <main>
            <div className="project-styling">
                <h1 className="text-3xl">Job Experience</h1>
                <div className="text-box">
                <h2 className="text-xl">Seeq Corporation MECOP Software Engineer Intern</h2>
                <ul className="bulleted-list">
                    <li>Developing new operators, increasing customer formula data analysis usability. </li>
                    <li>Improving scalability and ease of microservice implementation.</li>
                    <li>Implementing unit testing for new features in Java and Kotlin in the backend.</li>
                    <li>Reviewing and submitting code for review using Git for collaborative development.</li>
                    <li>Maintaining the existing application functionality by completing bug fixes.</li>
                </ul>
                </div>

                <div className="text-box">
                <h2 className="text-xl">Cambia Health Solutions MECOP Software Development Intern</h2>
                <ul className="bulleted-list">
                    <li>Developed a full stack web application that will replace existing decision table support,
                    which is created as a spreadsheet by business users then manually added to the database. </li>
                    <li>Created an interactive and intuitive user interface with React that mimics the layout of the
                    pre existing spreadsheet.</li>
                    <li>Implemented functionality with Node.js and SQL to promote tables between
                    environments (DEV, PPMO, and PROD) and calculate cartesian product tables used by
                    other internal company applications.</li>
                </ul>
                </div>
            </div>
            
          </main>
        </div>
      </main>
    )
  }
  