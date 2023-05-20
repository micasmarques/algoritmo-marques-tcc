import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Navbar, Nav} from 'react-bootstrap';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import Summary from './components/Summary';

function App() {
    const {t} = useTranslation();
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>{t('projectName')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">{t('about')}</Nav.Link>
                    </Nav>
                    <Nav>
                        <LanguageSwitcher/>
                        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Summary/>
        </div>
    );
}

export default App;
