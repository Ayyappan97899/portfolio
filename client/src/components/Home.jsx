import React from 'react'

const Home = () => {

    return (
        <>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Ayyappan</span><br /> React Js Developer</h1>

                    <a href="#contact" className="button">Contact</a>
                </div>

                <div className="home__social">
                    <a href="#" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    {/* <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a> */}
                    <a href="https://github.com/Ayyappan97899" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>

                <div className="home__img">
                    <img src="/img/m8.png" className='home__m' alt="" />
                </div>
            </section>
        </>
    )
}

export default Home
