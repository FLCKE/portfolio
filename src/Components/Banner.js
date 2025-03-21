import { Col, Container, Row } from "react-bootstrap";

export default function Banner() {
    
    return (
        <div className="bannerV1 ">
            <Container className="pt-5 ">
                <Row className="row-cols-1 row-cols-sm-2 g-5 ">
                    <Col className="text-center  order-sm-2">
                        <img src="/assets/img_profil.jpg" alt="image-principale" className=" border rounded-5  border-3  " style={{width:"75%"}}/>

                    </Col>
                    <Col className="align-text-bottom text-sm-start text-center order-sm-1">   
                        <h3 className="slide-in-left fs-sm-6">Kenett <span className="text-colored">FRANCISCO </span></h3>
                        <h1 className="slide-in-left title"> Developpeur web <span className="text-colored">Full stack</span> </h1>
                        <p className="slideInBottom fs-sm-6 subtitle">
                            Passionné par le web et les nouvelles technologies, je conçois des applications modernes et performantes grâce à une solide expertise en Front-End (HTML, CSS, JavaScript…) et Back-End (PHP, TypeScript, Golang, Python…)
                          </p>
                        <div className="slideInBottom fs-sm-6">
                            <a href="/Moncv.pdf" className="rounded-5  fs-md-4 px-md-4 px-2 slideInLeft bannerBtn ">Télécharger CV
                                <i className="bi bi-download mx-2 lideInLeft"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/louis-francisco-9025b0251/" className="rounded-5 mx-2 fs-4 bannerBtn"> <i className="bi bi-linkedin"></i> </a>
                            <a href="https://github.com/FLCKE/" className="rounded-5 fs-4 mx-2 bannerBtn"> <i className="bi bi-github"></i> </a>
                        </div>
                    </Col>
                </Row>
                <div className="m-5 slide-in-right">
                <Row >
                        <Col className="d-flex justify-content-around">
                            <h1 className="fw-bold " style={{ fontSize: '60px' }}><i class="bi bi-code-slash"></i></h1>
                            <p className="ms-2 w-75 mt-3">Polyvalence technique <br /> Full-Stack, maîtrise Front & Back  </p>
        
                            <div className="border-end h-75 mt-3 mx-2 d-md-block d-none " ></div>
                        </Col>
                        <Col className="d-flex justify-content-around">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}><i class="bi bi-lightbulb"></i></h1>
                            <p className="ms-2 w-75 mt-3">Curiosité et apprentissage continu <br /> Toujours en apprentissage. </p>
                        </Col>
                        <Col className="d-flex justify-content-around">
                            <div className="border-end h-75 mt-3 mx-2 d-md-block d-none " ></div>
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}><i class="bi bi-gear-wide-connected"></i></h1>
                            <p className="ms-2 w-75 mt-3">Capacité d’adaptation <br /> Rapide et flexible. </p>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    )
}