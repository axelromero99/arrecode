import React from "react";
import Reactmos from "./reactmos";

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
                    Prolific, punctual and responsible developer. I love working with ReactJS and Python.
                    Lately, I've been working as a Fullstack Web (principally backend) in projects with
                    ReactJS/JavaScript/PUG for the frontend and NodeJS/Flask with MongoDB for the backend.
                    I'm currently studying cybersecurity for the CISSP exam. I talk and write fluent Spanish and
                    English.
                    I have been working in the area for almost 4-5 years, and more than 7 years dedicated to studying it.
                </p>
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
                                            <h3>Frontend</h3>
                                            <ul className="strongTech">
                                                <li><FontAwesomeIcon icon={['fab', 'react']} /> ReactJS</li>
                                                <li><FontAwesomeIcon icon={['fab', 'react']} /> NextJS</li>
                                                <li><img className="logoImportado" src={gatsbyLogo} alt="gatsby" /> Gatsby</li>
                                                <li><FontAwesomeIcon icon={['fab', 'js']} /> Javascript</li>
                                                <li><FontAwesomeIcon icon={['fab', 'js']} /> JQuery</li>
                                                <li><FontAwesomeIcon icon={['fab', 'js']} /> Typescript</li>
                                                <li><FontAwesomeIcon icon={['fab', 'wordpress']} /> Wordpress</li>
                                                <li><FontAwesomeIcon icon={['fab', 'html5']} /> HTML</li>
                                                <li><FontAwesomeIcon icon={['fab', 'css3']} /> CSS ( Bootstrap, Material UI, Tailwind )</li>
                                                <li><FontAwesomeIcon icon={['fab', 'figma']} /> Figma</li>
                                                <li><FontAwesomeIcon icon={['fab', 'git']} /> GIT bash ( with Github and Bitbucket )</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <h3>Backend</h3>
                                            <ul className="strongTech">
                                                <li><FontAwesomeIcon icon={['fab', 'node']} /> NodeJS with Express</li>
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Python Flask</li>
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Python Django</li>
                                                <li><FontAwesomeIcon icon={['fab', 'php']} /> PHP for Wordpress</li>
                                                <li><FontAwesomeIcon icon={['fab', 'filezilla']} /> FileZilla</li>
                                                <li><FontAwesomeIcon icon={['fab', 'postman']} /> Postman</li>
                                                <li><FontAwesomeIcon icon={['fab', 'nginx']} /> Basic Nginx and SSL configurations</li>
                                                <li><FontAwesomeIcon icon={['fab', 'uwsgi']} /> uWSGI web server</li>
                                                <li><FontAwesomeIcon icon={['fab', 'google']} /> Google Cloud Platform ( Engine App, firewall configuration, VMs, OAuth API, Google Maps API, Cloud Shell, SSH, FTP )</li>
                                                <li><FontAwesomeIcon icon={['fab', 'aws']} /> Amazon Web Services ( EC2, VMs, S3 buckets, FTP, automated backups, SSH, security groups )</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <h3>Databases</h3>
                                            <ul className="strongTech">
                                                <li> MongoDB ( with Mongoose, PyMongo )</li>
                                                <li> MySQL </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div>
                                            <h3>Agile Methodologies</h3>
                                            <ul className="strongTech">
                                                <li><FontAwesomeIcon icon={['fab', 'react']} /> SCRUM</li>
                                                <li><FontAwesomeIcon icon={['fab', 'trello']} /> Trello </li>
                                                <li><FontAwesomeIcon icon={['fab', 'slack']} /> Slack </li>
                                                <li><FontAwesomeIcon icon={['fab', '']} /> ClickUp </li>
                                                <li><FontAwesomeIcon icon={['fab', 'notion']} /> Notion for notes </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <h3>Operative Systems</h3>
                                            <ul className="strongTech">
                                                <li><FontAwesomeIcon icon={['fab', 'windows']} /> Windows</li>
                                                <li><FontAwesomeIcon icon={['fab', 'linux']} /> Kali Linux </li>
                                                <li><FontAwesomeIcon icon={['fab', 'linux']} /> Amazon Linux 1 and 2 </li>
                                                <li><FontAwesomeIcon icon={['fab', 'linux']} /> Ubuntu</li>
                                                <li> Oracle VM Virtualbox</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div >
                                            <h3>Software</h3>
                                            <ul className="techExtra">
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Python ( Pandas, PyAutoGui, Tkinter, PyQt )</li>
                                                <li><FontAwesomeIcon icon={['fab', 'python']} /> Pip</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div >
                                            <h3>Other languagues, frameworks and libraries ( beginner - intermediate )</h3>
                                            <ul className="othersTech">
                                                <li><img className="logoImportado" src={seleniumLogo} alt="selenium" /> Selenium</li>
                                                <li><img className="logoImportado" src={cLogo} alt="c" />C</li>
                                                <li><FontAwesomeIcon icon={['fab', 'java']} alt="java" /> Java</li>
                                                <li><img className="logoImportado" src={arduinoLogo} alt="arduino" /> Arduino</li>
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
                                    <h2>Degree in Information Systems at <a href="http://exa.unne.edu.ar/carreras/lic_sistemas_informacion.php">Universidad Nacional del Nordeste (UNNE)</a></h2>
                                    <h3>(January 2018 - January 2022) (Corrientes Capital, Corrientes - Argentina)
                                        (Incomplete)</h3>
                                    <p>I quit this career at second year/level. Now i dedicate all my time to studying in my house and work in programming stuff.</p>

                                    <h2>Systems Engineering at <a href="https://www.frre.utn.edu.ar/isi/paginas/view/item/plandeestudios2008">UTN FRRE</a> (Incomplete) </h2>
                                    <h3>2018 January - 2018 December </h3>
                                    <p>I have one year of experience in Systems Ingenieering, where mathematics abounded. I discovered a great facility for logic mathematics and a fascination for physics, but also my path was clearer for me: I wanted to be a great programmer, as soon as possible, so i got into a programming centered career, without the ingenieering base.</p>
                                </div>

                                <div className="containerAboutMe">
                                    <h1>Languages</h1>
                                    <p style={{ paddingBottom: "10px" }}>Spanish: native<br></br>English: level B2 - C1</p>
                                </div>

                                <div className="containerAboutMe">
                                    <h1>Certifications</h1>
                                    <h3 >(You can see them in my <a href="https://www.linkedin.com/in/axel-ren%C3%A9-romero-esquivel-arre-code-582000193/">LinkedIn</a>)</h3>
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>
                                            Python Flask Courses - Various on YouTube (January - 2022)
                                        </li>
                                        <li>
                                            Complete NodeJS course with Express, SocketIO and MongoDB - Udemy (October - 2021)
                                        </li>
                                        <li>
                                            Learn Node.js Course - Codecademy (August - 2021)
                                        </li>
                                        <li>
                                            Automate the Boring Stuff with Python Programming - Udemy (February - 2021)
                                        </li>
                                        <li>
                                            Fullstack Web Development - LinkedIn (December - 2020)
                                        </li>
                                        <li>
                                            GitHub for programmers - LinkedIn (December - 2020)
                                        </li>
                                        <li>
                                            SCRUM: roles - LinkedIn (December - 2020)
                                        </li>
                                        <li>
                                            Relational database design - LinkedIn (November - 2020)
                                        </li>
                                        <li>
                                            Simplified project management - LinkedIn (November - 2020)
                                        </li>
                                        <li>
                                            Learn PHP Course - Codecademy (November - 2020)
                                        </li>
                                        <li>
                                            Practical NodeJS: website - LinkedIn (October - 2020)
                                        </li>
                                        <li>
                                            Time management fundaments - LinkedIn (October - 2020)
                                        </li>
                                        <li>
                                            Advanced JavaScript: good practices - LinkedIn (October - 2020)
                                        </li>
                                        <li>
                                            Advanced JavaScript: regular expressions - LinkedIn (October - 2020)
                                        </li>
                                        <li>
                                            The complete Front-End Web Development Course - Udemy (June - 2020)
                                        </li>
                                        <li>
                                            Master in Python 3: learn from scratch - Udemy (May - 2020)
                                        </li>
                                        <li>
                                            Mobile Apps Development Course - Google (August - 2018)
                                        </li>
                                        <li>
                                            Learn JavaScript Course - Codecademy (November - 2015)
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
                                <div className="containerAboutMe alignToLeft">
                                    <div className="itemJob">
                                        <h2>Fullstack Javascript Web Developer, Support and Security Consultant of <a href="www.creativehumans.com">Creative Humans</a> - <a href="https://www.devlights.com/">Devlights</a> </h2>
                                        <h3>2021 November - Now ( Working in paralel with Limpizimo project ) </h3>
                                        <p>Development of new functions and bug fixes on production web pages (one live and one staging). Responsible for redeploying the project from scratch, advising the client about security ( credentials and good practices ) and securing the environment for not suffering any vulnerability (port scanning, creation of correctly configured security groups, change of default IPs and ports, creation of scripts for automated backups in AWS S3 Buckets, generation of reports based on logs and internal scans, among other tasks). Carried out dumps and restores of MongoDB.
                                            Working together with another Fullstack Web developer ( <a href="https://www.linkedin.com/in/gastonchifflets/">Gaston Chifflets</a>). The client is from the United States, so the code, the comments and the communication is done in English.</p>
                                        <li>Stack: ReactJS, CSS (MaterialUI, StyledComponents, CSS vanilla), NodeJS with Typescript and Express, MongoDB, GIT on Bitbucket and deploys in Google Cloud Platform.</li>
                                        <li>Production environment in: AWS EC2, AWS S3 Buckets, NodeJS PM2, Nginx, Godaddy. </li>
                                    </div>

                                    <div className="itemJob">
                                        <h2>Backend Developer of Limpizimo project with Python Flask and MongoDB ( RESTful API for two mobile apps and one complex web app ) - <a href="https://www.devlights.com/">Devlights</a> </h2>
                                        <h3>2021 October - Now ( Working in paralel with Creative Humans project ) </h3>
                                        <p>In charge of developing the infrastructure and backend of two mobile applications and a complex web page with: Python Flask , MongoDB, GIT in Bitbucket and deploys in Google Cloud Platform. Team made up of a mobile developer and a project manager.</p>
                                        <li>Backend Stack: Python Flask, MongoDB atlas, GIT with Bitbucket, Postman enviroment for teams and documented endpoints</li>
                                        <li>Consumption of APIs: Bing maps, Google OAuth, Facebook Oauth, Twilio</li>
                                        <li>Deploy Stack: Google Cloud Platform, Nginx, Let's Encrypt SSL</li>
                                    </div>

                                    <div className="itemJob">

                                        <h2>Fullstack Web Developer MERN in TodoAgro E-commerce Project - <a href="https://www.devlights.com/">Devlights</a> </h2>
                                        <h3>2021 July - 2021 September</h3>
                                        <p>Working on a complete E-commerce in a team with 5 developers and 1 project manager.
                                        </p>
                                        <li>Stack: ReactJS, CSS (MaterialUI, StyledComponents, CSS vanilla), NodeJS with Typescript and Express, MongoDB, GIT on Bitbucket and deploys in Google Cloud Platform.</li>
                                        <li>Advanced frontend: localstorage for sessions, system of different users, high personalization of CSS with modules and Material UI, pagination, filters, use of Redux.</li>
                                    </div>

                                    <div className="itemJob">

                                        <h2>Fullstack Web Developer and Marketing Manager at <a href="https://www.quinsamayorista.com/quienessomos">QUINSA</a></h2>
                                        <h3>2021 April - (ACTUAL)</h3>
                                        <p>In charge of the management of an e-commerce and marketing strategies to carry out a company dedicated to the wholesale of clothing in Argentina. Using technologies such as: HTML, CSS, Javascript, Wordpress, Woocommerce, Tienda Nube, Facebook Business.
                                        </p>

                                        <ul>
                                            <li>Web technologies: HTML, CSS, JavaScript, Wordpress, WooCommerce.</li>
                                            <li>Marketing strategies implemented with Facebook Business and Instagram</li>
                                            <li>TiendaNube E-commerce Platform</li>
                                        </ul>

                                    </div>

                                    <div className="itemJob">

                                        <h2>Fullstack Web Developer (JavaScript, Wordpress, PHP, Flask, CSS, MySQL) and Support  at <a href="https://www.epimediaestudio.com/">Epimedia Estudio</a></h2>
                                        <h3>2020 September - 2021 April</h3>
                                        <p>Updating, maintenance, adding functionalities and complete development of web pages (mostly companies in the Northeast Argentinian area). I implemented: development of landing pages, responsive pages, correction of functionalities and plugins, implementation of WhatsApp Business chatbots with Twilio, sanitization of data with PHP and Python Flask backend, among others.
                                        </p>
                                        <li>Python Flask and Twilio: creation of small backend systems for chatbots. Use of WhatsApp API and Twilio system for chatbots.</li>
                                        <li>Wordpress and Woocommerce</li>
                                        <li>PHP: modifying, correcting and adding functionalities to WordPress plugins</li>
                                        <li>JavaScript, CSS, Bootstrap: creation of responsive pages, landing pages and new sections for live pages.</li>

                                    </div>


                                    <div className="itemJob">

                                        <h2>Junior Python Data Scientist and Software Developer - Software Project with a professional financial advisor</h2>
                                        <h3>2019 April - 2020 September</h3>
                                        <p>Developer for a software oriented to historical analysis of financial assets and crypto assets, applying Data Science and Data analysis with Python. The work was carried out in conjunction with a financial advisor (<a href="https://www.linkedin.com/in/germancb/">Germán Cáceres Bignotti</a>), who wanted to migrate an algorithm created in plain text and Google Sheets spreadsheets to a program that automates the tasks of a specific historical analysis of financial assets. The project ended in a relatively good result, with a minimum viable product, but I had to abandon it for personal reasons.</p>
                                        <li><strong>Python 3 and libraries:</strong> Anaconda Environment, Pandas, NumPy, TKinter, PyQT5, among others.</li>
                                        <li>Data Science, Software Development and financial applied concepts: statistical analysis, data cleaning, supervised machine learning, efficient big O, multiprocessing and multithreading, data structures and algorithms.</li>

                                    </div>

                                    <div className="itemJob">

                                        <h2>Freelance Graphic Designer (as <a href="https://www.instagram.com/arredits">@arredits</a>)</h2>
                                        <h3>2017 January - 2019 April</h3>
                                        <p>Advanced knowledge of Photoshop CS6 and video editing in Sony Vegas Pro 12. Perform multiple branding and advertising jobs for small enterprises and events. I created my graphic designer profile named <a href="https://www.instagram.com/arredits">@arredits</a> on Instagram, where I share my own designs.
                                            <li>Photoshop CS6</li>
                                            <li>Sony Vegas Pro 12</li>
                                        </p>
                                    </div>

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
