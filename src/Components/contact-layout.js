import { Container, Row, Col } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactLayout() {
    const [formData, setFormData] = useState({
        senderName: "",
        senderFirstname: "",
        senderEmail: "",
        senderNumber: "",
        senderMessage: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_qkeqtd9",
                "template_pnnyorp",
                formData,
                "eEKeJIEK1783sEpze"
            )
            .then(
                (response) => {
                    console.log("Email envoyé !", response.status, response.text);
                    alert("Votre message a été envoyé avec succès !");
                },
                (error) => {
                    console.log("Erreur lors de l'envoi de l'email", error);
                    alert("Échec de l'envoi du message.");
                }
            );
    };
    return (
        <section>

            <Container>
                <Row className="mt-2 mb-5 slideInBottom ">
                    <Col md="7" className="bg-light p-3 border">
                        <form onSubmit={sendEmail}>
                            <Row className="my-3 g-3">
                                <Col md="6">
                                    <input type="text" className="form-control" placeholder="Nom (Obligatoire)" name="senderName" id="name" 
                                        onChange={handleChange} required />
                                </Col>
                                <Col md="6">
                                    <input type="text" className="form-control" placeholder="Prénom (Obligatoire)" name="senderFirstname" id="fisrtName" 
                                        onChange={handleChange} required />
                                </Col>

                            </Row>
                            <Row className="mb-3 g-3">
                                <Col md="6">
                                    <input type="text" className="form-control" placeholder="Email (Obligatoire)" name="senderEmail" id="email" 
                                        onChange={handleChange} required />
                                </Col>
                                <Col md="6">
                                    <input type="text" className="form-control" placeholder="Numéro " name="senderNumber" id="number" 
                                        onChange={handleChange} />
                                </Col>

                            </Row >
                            <textarea placeholder="Message (Obligatoire)" className="w-100 mb-3 form-control" name="senderMessage" id="message" 
                                onChange={handleChange} required />
                            <div className="text-center my-5">
                                <button className="btn contactBtnBg w-50 fw-medium border-0" type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </Col>
                    <Col md="5" className="contactBg text-white p-5 " >
                        <div>
                            <Stack className="my-3 slide-in-right" direction="row"
                                spacing={2}
                                sx={{
                                    alignItems: "center",
                                }}>
                                <Item className="rounded-circle text-center logo-contact ">
                                    <i class="bi bi-telephone-outbound  text-white fs-1"></i>

                                </Item>
                                <Item className="fs-5">
                                    Phone <br />
                                    <a className="fw-semibold text-decoration-none text-white" href="tel:+33 0780802593">+33 0780802593</a>
                                </Item>
                            </Stack>
                            <Stack direction="row" className="slide-in-right" spacing={2}
                                sx={{
                                    alignItems: "center",
                                }}>
                                <Item className=" rounded-circle text-center logo-contact ">
                                    <i class="bi bi-envelope-at fs-1"></i>

                                </Item>
                                <Item className="fs-5">
                                    Email <br />
                                    <a className="fw-semibold text-decoration-none text-white" href="mailto:louisfrancisco229@gmail.com">louisfrancisco229@gmail.com</a>
                                </Item>


                            </Stack>
                            <Stack className="my-3 slide-in-right" direction="row"
                                spacing={2}
                                sx={{
                                    alignItems: "center",
                                }}>
                                <Item className=" rounded-circle text-center logo-contact ">
                                    <i class="bi bi-geo-alt fs-1"></i>

                                </Item>
                                <Item className="fs-5" >
                                    Adresse<br />
                                    <a className="fw-semibold text-decoration-none text-white" href="">Paris, France </a>
                                </Item>
                            </Stack>
                        </div >
                    </Col>
                </Row>

            </Container>

        </section>
    )
}