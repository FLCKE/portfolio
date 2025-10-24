// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Propos from './pages/a-propos';
import Contact from './pages/contact';
import { Helmet } from "react-helmet-async";
import NavBar from './Components/NavBar';
import ProtectedRoute from './config/ProtectedRoutes';
import LoginPage from './pages/login';
import ProjectForm from './pages/ProjectForms';
import ProjectList from './pages/ProjectList';
import Dashbord from './pages/dashbord';
function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio de Louis Francisco</title>
        <meta name="description" content="Portfolio de Louis Francisco" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/add-project" element={
              <ProjectForm />} />
            <Route path="/list-project" element={
              <ProjectList />} />
            <Route path="/dashboard" element={
              <Dashbord />} />

          </Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
