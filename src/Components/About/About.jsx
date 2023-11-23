
import "../About/About.scss";

export default function About() {
    return (
        <>
            <div id="about" className="aboutSection my-5 " >
                <div className="aboutWrapper">
                <h2 className=" text-center AboutMe mb-5 ">About <span className="titleColor">Me</span></h2>
                </div>
                <div className="container-fulid">
                    <div className="row ">

                        <div className="col-lg-4 aboutLeftDiv">
                            <img className=" img-fluid img-thumbnail" src="sonuimg1.jpg" alt="error" />
                        </div>
                        <div className="col-lg-8 AboutRightDiv ps-5 ">
                            <h2>My Name Is Sonu Pandey & I Am A Front-End Developer</h2>
                            <p>As A Web Designer, My Objective Is To Make A Positive Impact On Clients, Co-Workers, And The Internet Using My Skills And Experience To Design Compelling And Attractive Websites.</p>
                            <div className="personalInfo">
                                <ul>
                                    <p><span>Age </span> : 21</p>
                                    <p><span>Gender</span> : Male</p>
                                    <p><span>Language</span> : Hindi , English</p>
                                    <p><span>Work</span> : Front-End Developer</p>

                                </ul>
                                <ul>
                                    <p><span>Freelance</span> : Available</p>
                                    <p><span>Phone</span> : +91 8766325423</p>
                                    <p><span>Email</span> : Sonupandeybaldeo<br/>2003@gmail.com</p>
                                    <p><span>Country</span> : India</p>

                                </ul>
                            </div>
                            {/* <button className="btn btn-outline-dark">Download CV</button> */}
                            <a href="SonuResumef.pdf" target="_blank" className="btn btn-outline-dark">download CV</a>
                            <a href="tel:918766325423" className="btn btn-outline-dark ms-5">hire me</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


