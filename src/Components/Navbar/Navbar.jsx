
import "../Navbar/Navbar.scss"
import { NavLink } from "react-router-dom"



export default function Navbar() {
    return (
        <>


            <header className="header">
                <nav className="navbar  navbar-expand-lg ">
                    <div className="container-fluid MainNav ">
                        {/* <img src="https://cdn-icons-png.flaticon.com/128/7838/7838457.png" alt="erroe" /> */}
                        <NavLink className="mainLogo "  to={""}> Sonu Pandey</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item " aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item " aria-current="page" to={"/about"}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item "  to={"/services"}>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item " aria-current="page" to={"/Portfolio"}>Portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item " aria-current="page" to={"/Contact"}>Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="sub-nav-item " aria-current="page" to={"/downloadcv"}>DOWNLOAD CV</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}