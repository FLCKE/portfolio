import { Container } from "react-bootstrap";

export default function Experience() {
    return (
        <section className="py-5  experience">
            < Container className="px-4 ">
                <div class="container px-4 ">
                    <div class="row g-5">
                        <div className="col ">
                            <div className="mb-5 text-center ">

                                <h1 className=" text-white"> <i className="bi bi-person-workspace me-2 text-white slide-in-left" ></i>Mes Expériences</h1>
                            </div>
                            <div>
                                <div className="bg-white w-100 rounded-3 ps-5 pt-2 pb-1  my-2 text-dark slideInBottom">
                                    <h5>07/2025 - 08/2025</h5>
                                    <h4>Développeur Full-Stack</h4>
                                    <p>Trust Provider Consulting</p>
                                </div>
                                <div className="bg-white  w-100 rounded-3  ps-5 pt-2 pb-1  my-2 text-dark slideInBottom">
                                    <h5>12/2024 - 02/2025</h5>
                                    <h4>Analyste Développeur front-end</h4>
                                    <p>REEWAYY (stage)</p>
                                </div>
                                <div className="bg-white  w-100 rounded-3  ps-5 pt-2 pb-1  my-2 text-dark slideInBottom">
                                    <h5>06/2024 - 08/2024</h5>
                                    <h4>Développeur Full-Stack</h4>
                                    <p>SGTIC SARL (stage)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  ">
                            <div className="mb-5 text-center">
                                <h1 className=" text-white" > <i class="bi bi-easel2-fill me-2 text-white slide-in-left"></i>Mon parcours</h1>
                            </div>
                            <div className="align-items-center">
                                <div className="bg-white w-100 rounded-3  ps-5 pt-2 pb-1 my-2 text-dark slideInBottom " >
                                    <h5>2022 - 2027</h5>
                                    <h4>Bachelor vers Masters </h4>
                                    <p>Paris Ynov Campus</p>
                                </div>
                                <div className="bg-white w-100 rounded-3  ps-5 pt-2 pb-1  my-2 text-dark slideInBottom">
                                    <h5>2020 - 2022</h5>
                                    <h4>Licence 1 & 2 Informatique</h4>
                                    <p>ESGIS Bénin</p>
                                </div>

                                <div className="bg-white w-100 rounded-3 ps-5 pt-2 pb-1  my-2 text-dark slideInBottom">
                                    <h5>2019 - 2020</h5>
                                    <h4>Baccalauréat scientifique</h4>
                                    <p>CS Ste Bakhita</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}