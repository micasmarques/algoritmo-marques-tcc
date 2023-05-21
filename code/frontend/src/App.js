import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import Summary from './components/Summary';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './styles/App.css';

function App() {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <Router>
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>{t('Algoritmo de Marques')}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="mr-auto">
                            <Link to="https://github.com/micasmarques/algoritmo-marques-tcc" target="_blank">
                                {t('Sobre')} <FaGithub />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Summary />
                <Navbar fixed="bottom" bg="light">
                    <Nav className="mx-auto">
                        <Nav.Link href="https://github.com/micasmarques" target="_blank">
                            <FaGithub />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/micael-marques/" target="_blank">
                            <FaLinkedin />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/micasmarques/" target="_blank">
                            <FaInstagram />
                        </Nav.Link>
                        <Nav.Link href="mailto:micasmarques1132@gmail.com">
                            <FaEnvelope />
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </Router>
    );
}

export default App;
