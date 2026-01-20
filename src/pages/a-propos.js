// import logo from './logo.svg';
import '../App.css';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Experience from '../Components/experience';
import Skills from '../Components/Skills';

import Footer from '../Components/Footer';
import BannerV2 from '../Components/banner2';
import ExperienceV2 from '../Components/experienceV2';
export default function Propos() {
    return (
        <div >
            <BannerV2/>
            <ExperienceV2  />
            <Skills/>
            <Footer />
        </div>
    );
}


