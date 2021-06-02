import React from "react";
import "./Footer.css";
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">

                    {/* <small className="website-rights">ARRECODE © 2021</small> */}
                    <div className="social-icons">

                        <a
                            className="social-icon-link"
                            href="https://github.com/axelromero99"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="social-icon-link"
                            href="https://www.linkedin.com/in/axel-ren%C3%A9-romero-esquivel-arre-code-582000193/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
            <section style={{padding:"3rem 0 1rem 0",color:"white"}}>
            © 2021 Copyright: ARRE[CODE]
            </section>
        </div>
    );
}

export default Footer;
