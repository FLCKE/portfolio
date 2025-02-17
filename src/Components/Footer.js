export default function Footer() {
    return (
        <section className="footerSection text-white mt-5">
            <div className="text-center">
                <img src="/i2.png" className="logo2"></img>
            </div>
            <div>
                <ul className="nav justify-content-center ">
                    <li className="nav-item"><a href="/apropos" className="nav-link text-white">A propos</a></li>
                    <li className="nav-item"><a href="" className="nav-link text-white">Services</a></li>
                    {/* <li className="nav-item"><a href="/portfolio" className="nav-link text-dark" >Portfolio</a></li> */}
                    <li className="nav-item"><a href="/contact" className="nav-link text-white">Contact</a> </li>
                </ul>
            </div>
            <div className="text-center">
                © 2024 All rights reserved by kenett francisco
            </div>
        </section>
    )
}