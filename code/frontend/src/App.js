import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import Summary from './components/Summary';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './styles/App.css';

function App() {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => setShowModal(false);
    const handleDarkModeChange = (e) => setDarkMode(e.target.checked);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <Router>
            <div className="App">
                <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className="top-navbar">
                    <Navbar.Brand className="navbar-center">
                        {t('Algoritmo de Marques')}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id="navbar">
                        <Nav className="ml-auto">
                            <Nav.Link
                                href="https://github.com/micasmarques/algoritmo-marques-tcc"
                                target="_blank"
                            >
                                {t('Sobre')} <FaGithub/>
                            </Nav.Link>
                        </Nav>
                        <Form inline>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Dark Mode"
                                checked={darkMode}
                                onChange={handleDarkModeChange}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Summary/>
                <Navbar fixed="bottom" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="bottom-navbar">
                    <Nav className="mx-auto">
                        <Nav.Link href="https://github.com/micasmarques" target="_blank">
                            <FaGithub/>
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/micael-marques/"
                            target="_blank"
                        >
                            <FaLinkedin/>
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.instagram.com/micasmarques/"
                            target="_blank"
                        >
                            <FaInstagram/>
                        </Nav.Link>
                        <Nav.Link href="mailto:micasmarques1132@gmail.com">
                            <FaEnvelope/>
                        </Nav.Link>
                    </Nav>
                </Navbar>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Aviso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Se você está tendo dificuldades com o layout da página, tente usá-lo em um computador e diminuir o zoom da página.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Entendi
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </Router>
    );
}

export default App
