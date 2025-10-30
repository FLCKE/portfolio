import { useEffect, useMemo, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

const SKILLS = [
    // == Même contenu que ton code, mais en données ==
    { name: "HTML", level: 99, img: "/assets/html5.png", alt: "html" },
    { name: "CSS", level: 90, img: "/assets/css.png", alt: "css" },
    { name: "Javascript", level: 90, img: "/assets/javascript.png", alt: "javascript" },
    { name: "Typescript", level: 90, img: "/assets/typescript.png", alt: "typescript" },
    { name: "PHP", level: 90, img: "/assets/php.png", alt: "PHP" },

    { name: "Tailwind", level: 80, img: "/assets/tailwind.png", alt: "tailwind" },
    { name: "Bootstrap", level: 95, img: "/assets/bootstrap.png", alt: "bootstrap" },
    { name: "Express js", level: 90, img: "/assets/express-js.png", alt: "Express" },
    { name: "Laravel", level: 90, img: "/assets/laravel.png", alt: "Laravel" },

    { name: "SQL", level: 95, img: "/assets/sql.png", alt: "SQL" },
    { name: "WordPress", level: 89, img: "/assets/wordpress.png", alt: "Wordpress" },
    { name: "Elementor", level: 99, img: "/assets/Elementor.png", alt: "Elementor" },
    { name: "Contact form", level: 90, img: "/assets/Contact_7.png", alt: "contact_7" },

    { name: "Slider revolution", level: 90, img: "/assets/slider.webp", alt: "slider" },
    { name: "SASS", level: 95, img: "/assets/sass.png", alt: "SASS" },
    { name: "Node js", level: 90, img: "/assets/node-js.png", alt: "node" },
    { name: "Angular", level: 90, img: "/assets/angular.png", alt: "Angular" },

    { name: "Golang", level: 80, img: "/assets/Go.png", alt: "golang" },
    { name: "Python", level: 90, img: "/assets/python.png", alt: "python" },
    { name: "Ant Design", level: 82, img: "/assets/ant.png", alt: "AntDesign" },
    { name: "Next.js", level: 80, img: "/assets/next.png", alt: "NextJs" },
];

export default function Skills() {
    // Combien d’items par slide (responsive)
    const [itemsPerSlide, setItemsPerSlide] = useState(6); // desktop par défaut

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 576) setItemsPerSlide(3);        // mobile
            else if (w < 992) setItemsPerSlide(4);   // tablette
            else setItemsPerSlide(6);                // desktop
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Découpe en slides
    const slides = useMemo(() => {
        const chunks = [];
        for (let i = 0; i < SKILLS.length; i += itemsPerSlide) {
            chunks.push(SKILLS.slice(i, i + itemsPerSlide));
        }
        return chunks;
    }, [itemsPerSlide]);

    return (
        <section className="container my-5">
            <div className="text-center mb-3">
                <h1>SKILLS</h1>
                <div className="d-flex justify-content-between">
                    <div className="border-bottom border-primary w-25"></div>
                    <div className="border-bottom border-primary w-25"></div>
                </div>
                <p className="mx-5 slide-in-left">
                    Voici quelques technologies utilisées dans le cadre d'une montée en compétences ou d'une amélioration de mes connaissances
                </p>
            </div>

            <Carousel
                className="carousel slide"
                fade
                ride="carousel"
                interval={2000}          // change la vitesse globale ici (ms)
                pause="hover"
                indicators={slides.length > 1}
                controls={slides.length > 1}
                touch
            >
                {slides.map((group, slideIdx) => (
                    <Carousel.Item
                        key={`slide-${slideIdx}`}
                        className="d-flex justify-content-around gap-2 px-2"
                    >
                        {group.map(({ name, level, img, alt }, idx) => (
                            <Card key={`${name}-${idx}`} style={{ width: "8rem" }} className="text-center shadow-sm">
                                <Card.Img variant="top" className="img-fluid p-2" src={img} alt={alt || name} />
                                <Card.Body className="py-2">
                                    <Card.Title className="mb-1">{level}%</Card.Title>
                                    <Card.Text className="text-muted mb-0">{name}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
}
