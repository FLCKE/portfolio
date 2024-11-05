import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary  justify-content-between" sticky="top">
            <Container>
                <div>
                    <Navbar.Brand href="/">
                        <img src="/Photoroom.png" alt='logo' className='logo'></img>
                        louisfrancisco229@gmail.com
                    </Navbar.Brand>
                </div>
                <div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="me-auto">
                            <Nav.Link href="/">Acceuil</Nav.Link>
                            <Nav.Link href="/apropos">A propos</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                        </Nav>
                        <div className='ms-4'>
                            <button><a href='/contact' className='text-dark text-decoration-none'> Contactez-moi</a> </button>

                        </div>
                    </Navbar.Collapse>
                </div>
                
            </Container>
        </Navbar>
    );
}