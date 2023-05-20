import React, {useState, useEffect} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Navbar, Nav} from 'react-bootstrap';
import Summary from './components/Summary';
import './styles/App.css'; // se você tem um arquivo CSS para estilização global

function App() {
    const {t} = useTranslation();
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
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id="navbar">
                        <Nav className="mr-auto">
                            <Link to="https://github.com/micasmarques/algoritmo-marques-tcc"
                                  target="_blank">{t('Sobre')}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Summary/>
            </div>
        </Router>
    );
}

export default App;
