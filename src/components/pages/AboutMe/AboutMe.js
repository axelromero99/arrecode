import React from "react";
import { Button } from "../../Button";
import SlideToggle from "react-slide-toggle";
import Arrecode from "../../Arrecode"

import './AboutMe.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gatsbyLogo from './extraLogos/gatsby.png'
import pandasLogo from './extraLogos/pandas.png'
import photoshopLogo from './extraLogos/photoshop.png'
import pyqtLogo from './extraLogos/pyqt.png'
import seleniumLogo from './extraLogos/selenium.png'
import mysqLogo from './extraLogos/mysql.png'
import cLogo from './extraLogos/c.png'
import arduinoLogo from './extraLogos/arduino.png'
import { FaCcVisa } from "react-icons/fa";


const eases = window.eases;

const ToggleText = () => "Technologies";

const ProgressBar = ({ progress }) => {
    return (
        <span className="progress-bar">
            <span
                className="progress-bar__inner"
                style={{
                    transform: `scaleX(${progress})`
                }}
            />
        </span>
    );
};



function AboutMe() {
    return (
        <div style={{ textAlign: `center` }}>

            <Arrecode />
            <div className="containerAboutMe">
                <p>
                    I'm 21 years old, i live Corrientes, Argentina. I learned all kind of topics related to technology, developing and designing for almost 6 years. I started working profesionally in the area 3 years ago, and going. I love Python and React, its too much fun for me to work with those technologies.</p>
                <div className="containerCV">
                    <a href={process.env.PUBLIC_URL + '/axel-rene-romero-esquivel-cv.pdf'} download>
                        <button className="downloadButton">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <SlideToggle
                duration={1000}
                collapsed
                render={({
                    toggle,
                    setCollapsibleElement,
                    toggleState,
                    isMoving,
                    hasReversed,
                    range,
                    progress
                }) => (
                    <div
                        className={
                            "slide-toggle slide-toggle--special " +
                            (toggleState || "").toLowerCase()
                        }
                    >
                        <div className="slide-toggle__header">
                            <button className="slide-toggle__toggle" onClick={toggle}>
                                Technologies
                            </button>
                            <ProgressBar progress={progress} />
                        </div>
                        <div className="slide-toggle__box" ref={setCollapsibleElement}>
                            <div
                                className="slide-toggle__box-inner"
                                style={{ opacity: Math.max(0.5, range) }}
                            >

                                <div className="row containerAboutMe">
                                    <div className="column">
                                        <div>
                                            <h3>Strong Technologies</h3>
                                            <ul className="strongTech">
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Python</li>
                                                <li><FontAwesomeIcon icon={['fab', 'js']} /> Javascript ES6</li>
                                                <li><FontAwesomeIcon icon={['fab', 'react']} /> ReactJS</li>
                                                <li><img className="logoImportado" src={gatsbyLogo} /> Gatsby</li>
                                                <li><FontAwesomeIcon icon={['fab', 'css3']} /> CSS</li>
                                                <li><FontAwesomeIcon icon={['fab', 'html5']} /> HTML</li>
                                                <li><FontAwesomeIcon icon={['fab', 'wordpress']} /> Wordpress</li>
                                                <li><FontAwesomeIcon icon={['fab', 'php']} /> PHP</li>
                                                <li><FontAwesomeIcon icon={['fab', 'git']} /> GIT</li>
                                                <li><img className="logoImportado" src={photoshopLogo} /> Photoshop</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div >
                                            <h3>Frameworks, Libraries and Metodologies</h3>
                                            <ul className="techExtra">
                                                <li><FontAwesomeIcon icon={['fab', 'bootstrap']} /> Bootstrap</li>
                                                <li><FontAwesomeIcon icon={['fab', 'sass']} /> SASS</li>
                                                <li><img className="logoImportado" src={seleniumLogo} /> Selenium</li>
                                                <li><img className="logoImportado" src={pandasLogo} /> Pandas</li>
                                                <li><FontAwesomeIcon icon={['fab', 'font-awesome-alt']} /> Font Awesome</li>
                                                <li><FontAwesomeIcon icon={['fab', 'npm']} /> NPM</li>
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> PyAutoGui</li>
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Tkinter</li>
                                                <li><img className="logoImportado" src={pyqtLogo} /> PyQt</li>
                                                <li>SCRUM Metodology</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div >
                                            <h3>Other languagues, frameworks and libraries (begginer - intermediate)</h3>
                                            <ul className="othersTech">

                                                <li><img className="logoImportado" src={cLogo} />C</li>
                                                <li><FontAwesomeIcon icon={['fab', 'java']} /> Java</li>
                                                <li><FontAwesomeIcon icon={['fab', 'node']} /> NodeJS</li>
                                                <li><img className="logoImportado" src={arduinoLogo} /> Arduino</li>
                                                <li><img className="logoImportado" src={mysqLogo} />MySQL</li>
                                                <li><FontAwesomeIcon icon={['fab', 'figma']} /> Figma</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            />
            <SlideToggle
                duration={1000}
                collapsed
                render={({
                    toggle,
                    setCollapsibleElement,
                    toggleState,
                    isMoving,
                    hasReversed,
                    range,
                    progress
                }) => (
                    <div
                        className={
                            "slide-toggle slide-toggle--special " +
                            (toggleState || "").toLowerCase()
                        }
                    >
                        <div className="slide-toggle__header">
                            <button className="slide-toggle__toggle" onClick={toggle}>
                                Education && Certifications
                            </button>
                            <ProgressBar progress={progress} />
                        </div>
                        <div className="slide-toggle__box" ref={setCollapsibleElement}>
                            <div
                                className="slide-toggle__box-inner "
                                style={{ opacity: Math.max(0.5, range) }}
                            >
                                <div className="containerAboutMe">
                                    <h1>University</h1>
                                    <h2>Degree in Systems at <a href="http://exa.unne.edu.ar/carreras/lic_sistemas_informacion.php">FACENA UNNE</a> (Actual studying)</h2>
                                    <h3>2019 January - (NOW) </h3>
                                    <p>I am currently studying this career. I'm in the second year/level.</p>

                                    <h2>Systems Engineering at <a href="https://www.frre.utn.edu.ar/isi/paginas/view/item/plandeestudios2008">UTN FRRE</a> (Incomplete) </h2>
                                    <h3>2018 January - 2018 December </h3>
                                    <p>I have one year of experience in Systems Ingenieering, where mathematics abounded. I discovered a great facility for logic mathematics and a fascination for physics, but also my path was clearer for me: I wanted to be a great programmer, as soon as possible, so i got into a programming centered career, without the ingenieering base.</p>
                                </div>

                                <div className="containerAboutMe">
                                    <h1>Certifications</h1>
                                    <h3 >(You can see them in my <a href="https://www.linkedin.com/in/axel-ren%C3%A9-romero-esquivel-arre-code-582000193/">LinkedIn</a>)</h3>
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>
                                            Automate the Boring Stuff with Python Programming (Udemy) (February 2021)
                                        </li>
                                        <li>
                                            Conviértete en desarrollador web full-stack (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            GitHub para programadores (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            SCRUM: Roles (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            Aprende diseño de base de datos relacionales (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            Gestión de proyectos simplificada (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            Learn PHP Course (Codecademy) (November 2020)
                                        </li>
                                        <li>
                                            Node.js práctico: Sitio Web (LinkedIn) (November 2020)
                                        </li>
                                        <li>
                                            Fundamentos de la gestión del tiempo (LinkedIn) (October 2020)
                                        </li>
                                        <li>
                                            JavaScript Avanzado: Buenas Prácticas (LinkedIn) (October 2020)
                                        </li>
                                        <li>
                                            JavaScript Avanzado: Expresiones Regulares (LinkedIn) (October 2020)
                                        </li>
                                        <li>
                                            The Complete Front-End Web Development Course (Udemy) (June 2020)
                                        </li>
                                        <li>
                                            Curso Maestro de Python 3: Aprende Desde Cero (Udemy) (May 2020)
                                        </li>
                                        <li>
                                            Curso de Desarrollo de Apps Móviles (Google) (August 2018)
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            />
            <SlideToggle
                duration={1000}
                collapsed
                render={({
                    toggle,
                    setCollapsibleElement,
                    toggleState,
                    isMoving,
                    hasReversed,
                    range,
                    progress
                }) => (
                    <div
                        className={
                            "slide-toggle slide-toggle--special " +
                            (toggleState || "").toLowerCase()
                        }
                    >
                        <div className="slide-toggle__header">
                            <button className="slide-toggle__toggle" onClick={toggle}>
                                Work Experience
                            </button>
                            <ProgressBar progress={progress} />
                        </div>
                        <div className="slide-toggle__box" ref={setCollapsibleElement}>
                            <div
                                className="slide-toggle__box-inner  "
                                style={{ opacity: Math.max(0.5, range) }}
                            >
                                <div className="containerAboutMe">
                                    <h2>Fullstack Web Developer and Marketing Manager at <a href="https://www.quinsamayorista.com/quienessomos">QUINSA</a></h2>
                                    <h3>2021 April - (ACTUAL)</h3>
                                    <p>In charge of the management of an e-commerce and marketing strategies to carry out a company dedicated to the wholesale of clothing in Argentina. Using technologies such as: HTML, CSS, Javascript, Wordpress, Woocommerce, Tienda Nube, Facebook Business.
</p>

                                    <h2>Fullstack Web Developer and Support at <a href="https://www.epimediaestudio.com/">Epimedia Estudio</a>(HTML, CSS, Javascript, SQL, PHP and Wordpress)</h2>
                                    <h3>2020 September - 2021 April</h3>
                                    <p>Epimedia Estudio has allowed me to acquire strong knowledge in the practice of updating, maintenance, adding functionalities and complete development of web pages (mostly companies in the Northeast Argentinian area).
                                    I implemented: development of landing pages, responsive pages, correction of functionalities and plugins, implementation of WhatsApp Business chatbots with Twilio, sanitization of data with PHP and Python Flask backend, among others.
                                    Epimedia Estudio provided me with an environment conducive to work and educational growth, they gave me a lot of support and good treatment.
</p>

                                    <h2>Python Data Scientist Developer Junior (Python, Pandas, Numpy and PyQt5)</h2>
                                    <h3>2019 April - 2020 September</h3>
                                    <p>Developer for a software oriented to historical analysis of financial assets and crypto assets,aplying Data Science with Python.
The work was carried out in conjunction with a financial advisor(<a href="https://www.linkedin.com/in/germancb/">Germán Cáceres Bignotti</a>), who wanted to migrate an algorithm created in plain text and Google Sheets spreadsheets to a program that automates the tasks of an specific historical analysis of financial assets. The project ended in a relatively good result, with a minimum viable product, but I had to abandon it for personal reasons.</p>

                                    <h2>Freelance Graphic Designer (as <a href="https://www.instagram.com/arredits">@arredits</a>)</h2>
                                    <h3>2017 January - 2019 April</h3>
                                    <p>I've create multiple branding and advertising jobs for small businesses and events.
I've created my instagram profile for upload my own designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

        </div>
    );
}

export default AboutMe;
