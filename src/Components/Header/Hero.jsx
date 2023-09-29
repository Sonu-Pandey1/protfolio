import "../Header/Hero.scss"

export default function Hero() {
    return (
        <>
            <div className="HeroSection">
                <div className="container-fulid ">
                    <div className="row">
                        <div className="col-6 rightDiv">
                            <h1>Welcome To My PortFolio</h1>
                            <h2>My Name is sonu pandey</h2>
                            <h2>i am a developer</h2>
                            <p>A Web Developer Is A Programmer Who Develops World Wide Web Applications Using A Client–Server Model. The Applications Typically Use HTML, CSS, And JavaScript In The Client, And Any General-Purpose Programming Language In The Server.</p>
                            <button className="btn btn-dark">About Me</button>
                        </div>
                        <div className="col-6 leftDiv">
                            <img src="home-img.gif" alt="error" />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}