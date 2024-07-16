import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="socials">
        <a href="mailto:writedeborahh@gmail.com">
          <div className="social-item">
            <span>writedeborahh@gmail.com</span>
            <img src="/mail-icon.png" alt="mail-icon" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/deborahhn/">
          <div className="social-item">
            <span>LinkedIn</span>
            <img src="/linkedin-icon.png" alt="linkedin-icon" />
          </div>
        </a>
        <a href="https://www.behance.net/deborahN">
          <div className="social-item">
            <span>Behance</span>
            <img src="/behance-icon.png" alt="behance-icon" />
          </div>
        </a>
        <a href="https://docs.google.com/document/d/1_-BW9QFek804s2_PNqc8WlwLqMk4dRh9FcTxcJFhP8s/edit#heading=h.qo30s739v4zu" target="_blank" rel="noopener noreferrer">
          <div className="social-item">
            <span>Resume</span>
            <img src="/resume-icon.png" alt="resume-icon" />
          </div>
        </a>
      </div>
      {/* <footer>@ 2024 Deborah.N. All Rights Reserved.</footer> */}
    </div>
  );
};

export default Contact;
