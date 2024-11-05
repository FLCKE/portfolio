import { Col, Container, Row } from "react-bootstrap";

export default function Banner() {
    return (
        <div >
            <Container className=" mt-5">
                <Row >
                    <Col className="align-text-bottom">
                        <h3 className="slide-in-left">Je suis Kenett FRANCISCO</h3>
                        <h1 style={{ fontSize: '60px' }} className="slide-in-left"> Developpeur web Full stack</h1>
                        <p className="slideInBottom">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit laboriosam laborum placeat, ea qui ad corporis vitae ducimus, dolor provident voluptas dolores? Natus corrupti facere dicta ipsam explicabo libero.
                        </p>
                        <div className="slideInBottom">
                            <button className="rounded-5 me-5 fs-4 px-4slideInLeft">Télecharger CV
                                <i className="bi bi-download mx-2s lideInLeft"></i>
                            </button>
                            <button className="rounded-5 mx-2 fs-4"> <i className="bi bi-linkedin"></i> </button>
                            <button className="rounded-5 fs-4 mx-2"> <i className="bi bi-github"></i> </button>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <img src="/i.png" alt="image-principale" className="w-75 h-100 border rounded-5 border-info border-3 rotation-img " />

                    </Col>
                </Row>
                <div className="m-5">
                    <Row >
                        <Col className="d-flex justify-content-around">
                            <h1 className="fw-bold " style={{ fontSize: '60px' }}>14</h1>
                            <p className="ms-2 w-75 mt-3">Lorem ipsum dolor sit amet consectetur </p>
                        </Col>
                        <Col className="d-flex justify-content-around">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}>14K</h1>
                            <p className="ms-2 w-75 mt-3">Lorem ipsum dolor sit amet consectetur </p>
                        </Col>
                        <Col className="d-flex justify-content-around">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}>14</h1>
                            <p className="ms-2 w-75 mt-3">Lorem ipsum dolor sit amet consectetur </p>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    )
}