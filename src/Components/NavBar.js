import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
export default function NavBar() {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        
            // Récupérer le dernier segment de l'URL
            var currentPath = location.pathname.split('/').filter((x) => x).pop();
            if (!currentPath) {
                currentPath = "home"; // Définir "home" si la racine est atteinte
            }
            setPath(currentPath.toLowerCase());
        }, []);

    return (
        <Navbar expand="lg" className={`${path==="home"?"bg-transparent border-bottom   border-opacity-75":"bg-body-tertiary  Navbar"}  justify-content-between`} >
            <Container >
                <div>
                    <Navbar.Brand href="/" className='text-white logoText fs-6'>
                        <img src="/i2.png" alt='logo' className='logo'></img>
                        louisfrancisco229@gmail.com
                    </Navbar.Brand>
                </div>
                <div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-white' />
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