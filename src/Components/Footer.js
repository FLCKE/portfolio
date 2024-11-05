export default function Footer() {
    return (
        <section>
            <div className="text-center">
                <img src="/Photoroom.png" className="logo2"></img>
            </div>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a href="/apropos" className="nav-link text-dark">A propos</a></li>
                    <li className="nav-item"><a href="" className="nav-link text-dark">Services</a></li>
                    {/* <li className="nav-item"><a href="/portfolio" className="nav-link text-dark" >Portfolio</a></li> */}
                    <li className="nav-item"><a href="/contact" className="nav-link text-dark">Contact</a> </li>
                </ul>
            </div>
            <div className="text-center">
                © 2024 All rights reserved by kenett francisco
            </div>
        </section>
    )
}