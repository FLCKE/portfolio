import { Container } from "react-bootstrap";

export default function Experience() {
    return (
        <section className="container ">
            < Container className="d-flex flex-column ">
                <div className="row row-cols-1 row-cols-sm-2 gx-5 ps-3">
                    <div className="col ">
                        <div className="mb-5 ">
                            
                            <h1> <i className="bi bi-person-workspace me-2 text-primary" ></i>Mes Expériences</h1>
                        </div>
                        <div>
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2024 - 2024</h5>
                                <h4>Developper Full-Stack</h4>
                                <p>CREANO (stage)</p>
                            </div>
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2023 - 2023</h5>
                                <h4>Developper Full-Stack</h4>
                                <p>SABMA DIGITAL (stage)</p>
                            </div>
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2022 - 2022</h5>
                                <h4>Developper Full-Stack</h4>
                                <p>SGTIC SARL (stage)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col  ">
                        <div className="mb-5">
                            <h1> <i class="bi bi-easel2-fill me-2 text-primary"></i>Mon parcours</h1>
                        </div>
                        <div>
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2022 - 2027</h5>
                                <h4>Bachelor au Masteres </h4>
                                <p>Paris Ynov Campus</p>
                            </div>
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2020 - 2022</h5>
                                <h4>Licence 1 & 2 Informatique</h4>
                                <p>ESGIS BENIN</p>
                            </div>
                            
                            <div className="bg-primary w-75 rounded-3 ps-3 text-white">
                                <h5>2019 - 2020</h5>
                                <h4>Baccalauréat scientifique</h4>
                                <p>CS Ste Bakhita</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}