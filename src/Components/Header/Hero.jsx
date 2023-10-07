import "../Header/Hero.scss"
import Typed from 'react-typed';

export default function Hero() {
    return (
        <>
            <div  className="HeroSection">
                <div className="container-fulid ">
                    <div className="row">
                        <div className="col-lg-6 leftDiv">
                            <div className="animationleftdiv">
                                <h1>Hy I Am  
                                    <Typed className="Typinganimation px-2"
                                        strings={[
                                            "  Sonu Pandey "
                                        ]}
                                        typeSpeed={50}
                                        showCursor={false}
                                    />
                                </h1>
                                <h3 >I Am A 
                                    <Typed className="Typinganimation px-2"
                                        strings={[
                                            " Front-end Developer ",
                                            " React Developer",
                                            " Web Developer",
                                            " Freelancer",
                                            " Youtuber",
                                            " Coder ",                
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        loop
                                    /></h3>
                            </div>

                            <p>A Web Developer Is A Programmer Who Develops World Wide Web Applications Using A Client–Server Model. The Applications Typically Use HTML, CSS, And JavaScript In The Client, And Any General-Purpose Programming Language In The Server.</p>
                            <button className="btn btn-outline-success">Hire Me</button>
                            <a href="#about" className="btn btn-outline-dark ms-5 ">About me</a>
                        </div>
                        <div className="col-lg-6 rightDiv">
                            <img src="home-img.gif" alt="error" />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}