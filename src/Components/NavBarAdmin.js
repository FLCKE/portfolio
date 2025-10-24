import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavBarAdmin() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary Navbar  justify-content-between" >
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
                            <Nav.Link className=' text-white' href="/dashboard">Dashbord</Nav.Link>
                            <Nav.Link className='text-white ' href="/list-project">List Project</Nav.Link>
                            <Nav.Link className='text-white' href="/add-project">Add Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Container>
        </Navbar>
    );
}