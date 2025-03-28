// import logo from './logo.svg';
import '../App.css';
import Banner from '../Components/Banner';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WorkProcess from '../Components/workprocess';
import Experience from '../Components/experience';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';
export default function Home() {
    return (
        <>
            <NavBar />
            <Banner />
            <WorkProcess limit={4} />
            <Experience />
            <Skills />
            <Footer />
        </>
    );
}


