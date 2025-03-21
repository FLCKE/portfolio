import { Stack } from "@mui/material";
import Item from '@mui/material/Stack';
import { Container } from "react-bootstrap";

export default function WorkProcess({limit}) {
    const projects = [
        {
            id: 1,
            title: "E-météo",
            technologies: ["Angular", "Node.js", "Express.js", "SQLite", "Bootstrap", "api"],
            description:
                "Un site web conçu pour afficher des prévisions pour les jours à venir, incluant la température, les précipitations, le vent, et l'humidité.",
            image: "/assets/météo.jpeg",
            link: "https://github.com/FLCKE/meteo_app"
        },
        {
            id: 2,
            title: "E-commerce",
            technologies: ["PHP", "html", "SQL", "css","javascript"],
            description:
                "Une plateforme de commerce en ligne permettant aux utilisateurs d'acheter et de vendre des produits facilement.",
            image: "/assets/maillot.jpeg",
            link: "https://github.com/FLCKE/e-commerce-PHP"
        },
        {
            id: 3,
            title: " Saver|Sauvegarde de fichier en ligne",
            technologies: ["Angular", "Firebase","SQLite", "Bootstrap","typescript","express","node","html","css"],
            description:
                "Une application web permettant aux utilisateurs de gérer leurs fichiers quotidiens avec un système de sauvegarde.",
            image: "/assets/saver.jpeg",
            link:"https://github.com/FLCKE/Saver_ptoject"
        },
        {
            id: 4,
            title: "Quizz game",
            technologies: ["Javascript", "html", "css"],
            description:
                "Une application web permettant aux utilisateurs de gérer leurs tâches quotidiennes avec un système de rappel.",
            image: "/assets/quizzGame.png",
            link:"https://github.com/FLCKE/quizzgame"
        },
        {
            id: 5,
            title: "Application de recrutement",
            technologies: ["Next.js", "Javascript", "Faker.js", "Ant Design","Redux","DrawIo"],
            description:
                "Une application de bureau permettant aux utilisateurs de gérer leur stock de produits.",
            image: "/assets/recrutment.jpeg",
            link:"https://github.com/FLCKE/recrutementApp"
        },
        {
            id: 6,
            title: "Chef Tracker",
            technologies: ["C#", "WPF", "XAML", "SQLite"],
            description:
                "Une application web pour gérer le personnel en cuisine, suivre les horaires, les tâches assignées et les performances.",
            image: "/assets/Chef-Tracker.png",
            link: "https://github.com/FLCKE/Chef-tracker"
        }
    ];
    return (
        <section className="mb-5">
            <div className="text-center">
                <h1 className="slide-in-right text-uppercase ">Mes projets <span className="text-colored2 ">récents</span> </h1>
                <div className="d-flex justify-content-between"><div className="border-bottom border-primary w-25"></div><div className="border-bottom border-primary w-25"></div></div>
                <p className="mx-5 slide-in-left">
                    Voici quelques projets réalisés dans le cadre d'une prise de connaissance ou d'une amélioration de mes connaissances
                </p>
            </div>
            <div className="container slideInBottom ">
                <div className="row row-cols-1 row-cols-lg-2 gx-md-5 gy-5">
                    { projects.map((project,i) => {
                        while ( i < limit) {
                            return (
                                <div className="col items-of-process text-center ">
                                    <div className="process-item px-4 pt-4 rounded-top-4 text-center ">
                                        <img src={project.image} className="img-fluid  rounded-top-4"  />
                                    </div>
                                    <div className="desc ">
                                        <button onClick={() => window.open(project.link)} className="btn btn-primary rounded-bottom-4">
                                            <Stack className=" slide-in-right" direction="row"
                                                spacing={2}
                                            >
                                                <Item className="rounded-circle text-center logo-contact ">
                                                    <div className="">

                                                        <h5>{project.title} - {project.technologies.join(", ")}</h5>
                                                        <p>{project.description}</p>
                                                    </div>

                                                </Item>
                                                <Item className="fs-5">
                                                    <div className=" d-flex align-items-center ">
                                                        <i className="bi bi-arrow-left icon-process"></i>
                                                    </div>
                                                </Item>
                                            </Stack>

                                        </button>
                                    </div>
                                </div>
                            );
                        }   
                    })}

                </div>

            </div>
        </section>
    )
}