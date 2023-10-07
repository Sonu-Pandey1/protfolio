import "../Contact/Contact.scss"


export default function Contact() {
    return (
        <>
            <div className="container d-block">
                <div className="contactWrapper">
                    <h2 className="contact">Contact <span className="titleColor">Me</span></h2>
                </div>
                <div className="AboutMeWrapper justify-content-between ">
                    <div className="aboutMe">
                        <div className="iconWrapper ">
                            <i className="fa fa-envelope"></i>
                        </div>

                        <h3>My Gmail</h3>
                        <p>Sonupandeybaldeo2003@gmail.com</p>
                    </div>
                    <div className="aboutMe">
                        <div className="iconWrapper">
                            <i className="fa fa-phone"></i>
                        </div>

                        <h3>My Number</h3>
                        <p>+91 8766325423</p>
                    </div>
                    <div className="aboutMe">
                        <div className="iconWrapper">
                            <i className="fa fa-map-marker-alt"></i>
                        </div>
                        <h3>My Address</h3>
                        <p>Sarswati Vihar Kora Colony , Sector -62 , Noida ,India</p>
                    </div>
                </div>

                <div className=" container form">
                    <div className="row">
                        <div className=" col-7 formdiv">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Comments</label>
                            </div>

                        </div>
                        <div className=" col-5 mapdiv">
                            uri quis nam mollitia ducimus culpa animi necessitatibus harum similique quaerat, xcepturi sed voluptas laudantium nostrum iure, nemo exercitationem provident maxime. Placeat, facere!

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}