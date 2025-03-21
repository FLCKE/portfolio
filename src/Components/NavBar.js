import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary Navbar  justify-content-between" sticky="top">
            <Container >
                <div>
                    <Navbar.Brand href="/" className='text-white logoText'>
                        <img src="/i2.png" alt='logo' className='logo'></img>
                        louisfrancisco229@gmail.com
                    </Navbar.Brand>
                </div>
                <div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="me-auto ">
                            <Nav.Link className=' text-white' href="/">Accueil</Nav.Link>
                            <Nav.Link className='text-white ' href="/apropos">A propos</Nav.Link>
                            <Nav.Link className='text-white' href="/portfolio">Portfolio</Nav.Link>
                            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                        </Nav>
                        <div className='ms-sm-4'>
                            <button className='navBarBtn'><a href='/contact' className=' navBarA text-decoration-none'> Contactez-moi</a> </button>

                        </div>
                    </Navbar.Collapse>
                </div>
                
            </Container>
        </Navbar>
    );
}