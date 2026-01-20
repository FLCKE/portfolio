import { Container, Row, Col } from "react-bootstrap";

export default function ExperienceV2() {
  return (
    <section className="py-5 bg-body-tertiary">
      <Container className="px-4">
        <Row className="g-5">

          {/* Colonne Expériences */}
          <Col className="p-0 px-md-5">
            <div className="mb-5 text-center">
              <h1 className="text-dark">
                Mes <span className="text-primary"> Expériences</span>
              </h1>
              <div className="d-flex justify-content-between"><div className="border-bottom border-primary w-25"></div><div className="border-bottom border-primary w-25"></div></div>

            </div>

            {[
              { date: "07/2025 - 08/2025", job: "Développeur Full-Stack", company: "Trust Provider Consulting" },
              { date: "12/2024 - 02/2025", job: "Analyste Développeur front-end NEXTJS", company: "REEWAYY (stage)" },
              { date: "06/2024 - 08/2024", job: "Développeur Full-Stack WordPress PHP", company: "Atelier CREANO" },
            ].map((item, i) => (
              <div
                className="bg-white rounded-3  pt-2 pb-1 my-2 text-dark slideInBottom w-100 text-center border"
                key={i}
              >
                <h5>{item.date}</h5>
                <h4>{item.job}</h4>
                <p>{item.company}</p>
              </div>
            ))}
          </Col>

          {/* Colonne Parcours */}
          <Col className="p-0 px-md-5">
            <div className="mb-5 text-center">
              <h1 className="text-dark">
                Mon <span className="text-primary"> parcours</span>
              </h1>
              <div className="d-flex justify-content-between"><div className="border-bottom border-primary w-25"></div><div className="border-bottom border-primary w-25"></div></div>

            </div>

            {[
              { date: "2022 - 2027", school: "Paris Ynov Campus", cursus: "Bachelor vers Masters" },
              { date: "2020 - 2022", school: "ESGIS Bénin", cursus: "Licence 1 & 2 Informatique" },
              { date: "2019 - 2020", school: "CS Ste Bakhita", cursus: "Baccalauréat scientifique" },
            ].map((item, i) => (
              <div
                className="bg-white rounded-3 pt-2 pb-1 my-2 text-dark slideInBottom w-100 text-center border"
                key={i}
              >
                <h5>{item.date}</h5>
                <h4>{item.cursus}</h4>
                <p>{item.school}</p>
              </div>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
}
