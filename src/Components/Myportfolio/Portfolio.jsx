import "../Myportfolio/Portfolio.scss"

export default function Portfolio() {
    return (
        <>
            <section className="My_Portfolio">
                <div className="portfolioWrappper">
                    <h2 className="text-center My_portfolio mb-5">My Portfolio</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="box">
                            <a href="https://moviexstream.netlify.app/" target="_blank" rel="noreferrer"> <img className="" src="my-sixth-website.png" alt="error" /></a>
                        </div>
                        <div className="box">
                            <a href="https://github.com/Sonu-Pandey1/News-Monkey" target="_blank" rel="noreferrer"><img src="my-fiveth-website.png" alt="error" /></a>
                        </div>
                        <div className="box">
                           <a href="https://codewithsonu.netlify.app/" target="_blank" rel="noreferrer"> <img src="my-fourth-website.png" alt="error" /></a>
                        </div>
                        <div className="box">
                            <a href="https://sonu-pandey1.github.io/vite-project/" target="_blank" rel="noreferrer"><img src="my-third-website.png" alt="error" /></a>
                        </div>
                        <div className="box">
                          <a href="https://mindedcorder.netlify.app/" target="_blank" rel="noreferrer"><img src="my-second-website.png" alt="error" /></a>
                        </div>
                        <div className="box">
                            <a href="https://pandeycreation.netlify.app/index2.html" target="_blank" rel="noreferrer"><img src="my-first-website.png" alt="error" /></a>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}