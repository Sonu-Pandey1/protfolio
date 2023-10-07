
import "../About/About.scss";

export default function About() {
    return (
        <>
            <div className="aboutSection ">
                <div className="aboutWrapper">
                <h2 className=" text-center AboutMe">About <span className="titleColor">Me</span></h2>
                </div>
                <div className="container-fulid">
                    <div className="row ">

                        <div className="col-4 aboutLeftDiv">
                            <img className=" img-fluid img-thumbnail" src="sonuimg.jpg" alt="error" />
                        </div>
                        <div className="col-8 AboutRightDiv ps-5 ">
                            <h2>My Name Is Sonu Pandey & I Am A Front-End Developer</h2>
                            <p>As A Web Designer, My Objective Is To Make A Positive Impact On Clients, Co-Workers, And The Internet Using My Skills And Experience To Design Compelling And Attractive Websites.</p>
                            <div className="personalInfo">
                                <ul>
                                    <p><span>Age</span> : 21</p>
                                    <p><span>Gender</span> : Male</p>
                                    <p><span>Language</span> : Hindi , English</p>
                                    <p><span>Work</span> : Front-End Developer</p>

                                </ul>
                                <ul>
                                    <p><span>Freelance</span> : Available</p>
                                    <p><span>Phone</span> : +91 8766325423</p>
                                    <p><span>Email</span> : Sonupandeybaldeo2003@gmail.com</p>
                                    <p><span>Country</span> : India</p>

                                </ul>
                            </div>
                            <button className="btn btn-outline-dark">Download CV</button>
                            <button className=" btn btn-outline-info ms-5">Hire Me</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


