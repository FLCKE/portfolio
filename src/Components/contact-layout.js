import { Container, Row, Col,Stack } from "react-bootstrap";

export default function ContactLayout(){
    return(
        <section>
            <Container>
                <Row className="mt-2 ">
                    <Col md="7" className="bg-danger"> 
                        <form>
                            <Row className="my-3 g-3">
                                <Col md="6">
                                    <input type="text"className="w-100" placeholder="Nom (Obligatoire)" name="senderName" id="name" />
                                </Col>
                                <Col md="6">
                                    <input type="text" className="w-100" placeHolder="Prénom (Obligatoire)" name="senderFirstname" id="fisrtName"/>
                                </Col>

                            </Row> 
                            <Row className="mb-3 g-3">
                                <Col md="6">
                                    <input type="text" className="w-100" placeholder="Email (Obligatoire)" name="senderEmail" id="email" />
                                </Col>
                                <Col md="6">
                                    <input type="text" className="w-100" placeHolder="Numéro (Obligatoire)" name="senderNumber" id="number"/>
                                </Col>

                            </Row > 
                            <textarea placeholder="Message (Obligatoire)" className="w-100 mb-3" name="senderMessage" id="message" />
                            <div className="text-center mb-3">
                                <button>
                                    Envoyer
                                </button>
                            </div>
                        </form>                         
                     </Col>
                    <Col md="5" className="bg-primary text-white pt-3 ps-5" > 
                        <Stack direction="horizontal" gap={2}>
                            <div className="bg-dark rounded-circle text-center logo-contact pt-2">
                                <i class="bi bi-telephone-outbound  text-white fs-4 "></i>

                            </div>
                            <p >
                                Phone <br />
                                <a className="fw-semibold text-decoration-none text-white" href="tel:+33 0780802593">+33 0780802593</a>
                            </p>
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                                <div className="bg-dark rounded-circle text-center logo-contact p-2">
                                    <i class="bi bi-envelope-at fs-4"></i>

                                </div>
                            <p >
                                Email <br />
                                <a className="fw-semibold text-decoration-none text-white" href="mailto:louisfrancisco229@gmail.com">louisfrancisco229@gmail.com</a>
                            </p>
                            
                           
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                                <div className="bg-dark rounded-circle text-center logo-contact p-2">
                                    <i class="bi bi-geo-alt fs-4"></i>

                                </div>
                                <p >
                                    Adresse<br />
                                    <a className="fw-semibold text-decoration-none text-white" href="tel:+33 0780802593">04 Avenue Michel Débré, <br /> 93360, Neuilly-Plaisance</a>
                                </p>
                        </Stack>
                       
                        
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}