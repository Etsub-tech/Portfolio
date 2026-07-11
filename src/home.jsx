import './home.css'
function Home (){
    return(
    <>
        <div className='top-nav'>
            <a>HOME</a>
            <a>ABOUT</a>
            <a>PROJECT</a>
            <a>CONTACT</a>
        </div>
        <section className="home">

        <div>

        </div>
        <div className='hero'>
            <div className='name'>
               <h1>ETSUB</h1><h1>AMHA</h1>
            </div>
            <div style={{marginRight: "900px"}}>
                <span>A PASSIONATE WEB DEVELOPER AND UX/UI DESIGNER</span>
            </div>
       
        </div>

        <div>
        </div>

        </section>
        <div className='second'>
           <h1>hey</h1>
        </div>

            <div className="projects">
                <div>
                    <h1 style={{fontSize:"100px"}}>PROJECTS</h1>
                </div>
            </div>
    </>
)
}

export default Home;