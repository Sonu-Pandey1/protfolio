
import "../Navbar/Navbar.scss"




export default function Navbar() {
   
    return (
        <>


            <header className="header">
                <nav className="navbar  navbar-expand-lg ">
                    <div className="container-fluid MainNav ">
                        {/* <img src="https://cdn-icons-png.flaticon.com/128/7838/7838457.png" alt="erroe" /> */}
                        {/* <NavLink className="mainLogo "  to={""}> Sonu Pandey</NavLink> */}
                        <h1 className="title">Sonu <span className="titlecolor">Pandey</span></h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto ">
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/"}>Home</NavLink> */}
                                    <a href="#home" className="sub-nav-item">Home</a>
                                    
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/about"}>About</NavLink> */}
                                    <a href="#about" className="sub-nav-item">about me</a>
                                    {/* <button onClick={()=>{navigate("#about")}}>About</button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/Contact"}>Contact</NavLink> */}
                                    <a href="#skills" className="sub-nav-item">Skills</a>
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/Portfolio"}>Portfolio</NavLink> */}
                                    <a href="#portfolio" className="sub-nav-item">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/Contact"}>Contact</NavLink> */}
                                    <a href="#contact" className="sub-nav-item">Contact</a>
                                </li>
                                
                                <li className="nav-item">
                                    {/* <NavLink className="sub-nav-item " aria-current="page" to={"/downloadcv"}>DOWNLOAD CV</NavLink> */}
                                    <a href="SonuResumef.pdf" target="_blank" className="btn btn-outline-dark">download CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}