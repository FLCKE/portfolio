import { Container } from "react-bootstrap";

export default function WorkProcess() {
    return (
        <section className="">
            <div className="text-center">
                <h1 className="slide-in-right text-uppercase ">Mes project <span className="text-colored2 ">récents</span> </h1>
                <div className="d-flex justify-content-between"><div className="border-bottom border-primary w-25"></div><div className="border-bottom border-primary w-25"></div></div>
                <p className="mx-5 slide-in-left">
                    Voici quelque projets réalisés dans le cadre d'une prise de connaissance ou d'une amélioration de mes connaissances
                </p>
            </div>
            <div className="container slideInBottom ">
                <div className="row row-cols-1 row-cols-lg-2 g-5">
                    <div className="col items-of-process text-center ">
                        <div className="process-item px-4 pt-4 rounded-top-4 text-center">
                            <div className="img-project ">
                                <img src="/assets/météo.jpeg" className="img-fluid rounded-top-4" />
                            </div>
                        </div>
                        <div className="desc ">
                            <button  >
                                <div className="row ">
                                    <div className="col-10">

                                        <h5>E-météo - Angular, node js , express js SQLite</h5>
                                        <p>Un site web concu pour afficher des prévisions pour les jours à venir, incluant la température, les précipitations, le vent, et l'humidité</p>
                                    </div>
                                    <div className="col-2 d-flex align-items-center ">
                                        <i className="bi bi-arrow-left icon-process"></i>
                                    </div>
                                </div>
                            </button>
                        </div>


                    </div>
                    <div className="col items-of-process ">
                        <div className="process-item px-4 pt-4 rounded-top-4">
                            <div className="img-project ">
                                <img src="/assets/maillot.jpeg" className="img-fluid rounded-top-4" />
                            </div>
                        </div>
                        <div className="desc ">
                            <button >
                                <div className="row ">
                                    <div className="col-10">

                                        <h5>E-Maillot - PHP Bootstrap CSS JAVASCRIPT C# MySQL</h5>
                                        <p>Un site de vente de maillots de foot propose un large choix de maillots officiels pour les clubs et les équipes nationales, ainsi que pour des compétitions spécifiques. </p>
                                    </div>
                                    <div className="col-2 d-flex align-items-center ">
                                        <i className="bi bi-arrow-left icon-process"></i>
                                    </div>
                                </div>
                            </button>
                        </div>


                    </div>
                    <div className="col items-of-process ">
                        <div className="process-item px-4 pt-4 rounded-top-4">
                            <div className="img-project ">
                                <img src="/assets/saver3.jpeg" className="img-fluid rounded-top-4 " />
                            </div>
                        </div>
                        <div className="desc ">
                            <button >
                                <div className="row ">
                                    <div className="col-10">

                                        <h5>Saver -Typescript Javascript Angular NodeJS ExpressJS Firebase Bootstrap SQLite </h5>
                                        <p >
                                            Un site de sauvegarde de fichiers en ligne permet aux utilisateurs de stocker et de protéger leurs données importantes sur le cloud. </p>
                                    </div>
                                    <div className="col-2 d-flex align-items-center ">
                                        <i className="bi bi-arrow-left icon-process"></i>
                                    </div>
                                </div>
                            </button>
                        </div>


                    </div>

                </div>

            </div>
        </section>
    )
}