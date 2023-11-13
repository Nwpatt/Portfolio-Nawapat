import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Nawapat Thongpitaks (Link) </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br /> I'm a final year student from <span className="purple">King Mongkut's University of Technology North Bangkok (KMUTNB).</span>
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.  */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sing a song 🎤
            </li>
            <li className="about-activity">
              <ImPointRight /> Take photos 📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🚗
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't stop to improve myself in everyday!"{" "}
          </p>
          <footer className="blockquote-footer">Nawapat Thongpitaks</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
