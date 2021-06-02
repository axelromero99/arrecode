import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./ContactForm.css";

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_tkmv4ts', 'template_9z72dsk', e.target, 'user_e9mLAw8lKICMrjvL87sTi')
            .then((result) => {
                console.log(result.text);
                {/* si fue exitoso */ }
                document.getElementById("thanks").classList.remove("invisible");
                document.getElementById("form").classList.add("invisible");
            }, (error) => {
                console.log(error.text);
                {/* si no fue exitoso */ }
            });
        e.target.reset()
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ paddingTop: "60px" }}>Leave me a message</h2>
            <form className="formularioContacto contact-form" onSubmit={sendEmail}>
                <div id="form">
                    <div className="form1">
                        <input style={{ flex: "1" }} name="name" type="text" maxlength="40" id="name" placeholder=" Your name" required />
                    </div>
                    <div className="form2">
                        <input style={{ flex: "1" }} name="email" type="email" maxlength="80" id="email" placeholder=" Your email" required />
                    </div>
                    <div className="form2">
                        <input style={{ flex: "1" }} name="subject" type="subject" maxlength="150" id="subject" placeholder=" Subject" required />
                    </div>
                    <div className="form3">
                        <textarea style={{ flex: "1" }} name="message" id="message" maxlength="1000" placeholder=" Your message..." required />
                    </div>
                    <div className="form4">
                        <button type="submit" value="Send">Send</button>
                    </div>
                </div>
                <div id="thanks" className="invisible">
                    <h3>Thanks! You will be answered as soon as posible.</h3>
                </div>
            </form>
            <h3 style={{ textAlign: "center", margin: "0px 50px 0px 50px" }}>If you want to send me something more extense, with images or videos, send me all the information to this email address: <br></br>axelromero99@outlook.com</h3>
        </div>
    );
};

export default ContactForm;