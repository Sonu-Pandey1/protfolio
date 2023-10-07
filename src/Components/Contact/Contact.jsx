import "../Contact/Contact.scss"


export default function Contact() {
    return (
        <>
            <div id="contact" className="container d-block">
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

                <div className="  form">

                    <div className="row gap-4 justify-content-between mt-5">
                        <div className="col-5 bg-light">
                            <form action="">
                                <input type="text" placeholder="Name" className="boxx" /><br />
                                <input type="email" placeholder="Email" className="boxx" /><br />
                                <input type="number" placeholder="Number" className="boxx" /><br />
                                <textarea className="mt-4" name="" placeholder="Message..." id="" cols="59" rows="7"></textarea><br /><br />
                                <button className="btn btn-outline-success mb-3">Send Message</button>
                            </form>
                        </div>

                        <div className="col bg-light mapwrapper">
                            <iframe className="map " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17152.802292630313!2d77.34244312255036!3d28.618516859202664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53ee2158279%3A0x3826ffefb2fb48f8!2sSaraswathi%20Vihar%2C%20Khora%20Colony%2C%20Sector%2062A%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1696669440254!5m2!1sen!2sin" width="600" height="450" style={{ border: "" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}