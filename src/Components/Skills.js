import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
export default function Skills() {
    return (
        <section className='container my-5'>
            <div className='text-center mb-3' >
                <h1>SKILLS</h1>
                <div className="d-flex justify-content-between"><div className="border-bottom border-primary w-25"></div><div className="border-bottom border-primary w-25"></div></div>
                <p className="mx-5 slide-in-left">
                    Voici quelques technologies utilisées dans le cadre d'une montée en compétences ou d'une amélioration de mes connaissances
                </p>
            </div>
            <Carousel className='carousel slide carousel-fade ' data-bs-ride="carousel">
                <Carousel.Item className='d-flex justify-content-around ' data-bs-interval="50">
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/html5.png" alt='html' />
                        <Card.Body>
                            <Card.Title>99%</Card.Title>
                            <Card.Text>
                                HTML
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/css.png" alt='css' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                CSS
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/javascript.png" alt='javascript' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Javascript
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/php.png" alt='PHP' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                PHP
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-around ' data-bs-interval="100">
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/tailwind.png" alt='tailwind' />
                        <Card.Body>
                            <Card.Title>80%</Card.Title>
                            <Card.Text>
                                Tailwind
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/bootstrap.png" alt='bootstrap' />
                        <Card.Body>

                            <Card.Title>95%</Card.Title>
                            <Card.Text>
                                Bootstrap
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/express-js.png" alt='Express' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Express js
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/laravel.png" alt='Laravel' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Laravel
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-around' data-bs-interval="150">
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/sql.png" alt='SQL' />
                        <Card.Body>
                            <Card.Title>95%</Card.Title>
                            <Card.Text>
                                SQL
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/wordpress.png" alt='Wordpress' />
                        <Card.Body>

                            <Card.Title>89%</Card.Title>
                            <Card.Text>
                                WordPress
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/Elementor.png" alt='Elementor' />
                        <Card.Body>

                            <Card.Title>99%</Card.Title>
                            <Card.Text>
                                Elementor
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/Contact_7.png" alt='contact_7' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Contact form
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-around ' data-bs-interval="150">
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/slider.webp" alt='slider' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Slider revolution
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/sass.png" alt='SASS' />
                        <Card.Body>

                            <Card.Title>95%</Card.Title>
                            <Card.Text>
                                SASS
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/node-js.png" alt='node' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Node js
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/angular.png" alt='Angular' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Angular
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-around ' data-bs-interval="150">
                    <Card style={{ width: '8rem' }} className='text-center'>
                        <Card.Img variant="top" className='img-fluid' src="/assets/Go.png" alt='golang' />
                        <Card.Body>

                            <Card.Title>80%</Card.Title>
                            <Card.Text>
                                Golang
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center '>
                        <Card.Img variant="top" className='img-fluid' src="/assets/python.png" alt='python' />
                        <Card.Body>

                            <Card.Title>90%</Card.Title>
                            <Card.Text>
                                Python
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center '>
                        <Card.Img variant="top" className='img-fluid' src="/assets/ant.png" alt='AntDesign' />
                        <Card.Body>

                            <Card.Title>82%</Card.Title>
                            <Card.Text>
                                Ant Design
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '8rem' }} className='text-center '>
                        <Card.Img variant="top" className='img-fluid' src="/assets/next.png" alt='NextJs' />
                        <Card.Body>

                            <Card.Title>80%</Card.Title>
                            <Card.Text>
                                Next.js
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Carousel.Item>

            </Carousel>

        </section>
    )
}