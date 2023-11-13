import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.svg";
import emotion from "../../Assets/Projects/emotion.svg";
import editor from "../../Assets/Projects/codeEditor.svg";
import chatify from "../../Assets/Projects/chatify.svg";
import suicide from "../../Assets/Projects/suicide.svg";
import bitsOfCode from "../../Assets/Projects/blog.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio-Nawapat"
              description="A Project that professor want us to do our homework by using React and Node.js for make Web Application about a portfolio."
              ghLink="https://github.com/Nwpatt/Portfolio-Nawapat"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React-Workshop"
              description="Workshop from professor for teach us how to use React and Node.js to being a programmer with this skill."
              ghLink="https://github.com/Nwpatt/React-Workshop"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" react_nwpatt_kongruksiam "
              description="Online course from youtube channel name 'Kongruksiam'. He teaches about how to use React like a professional uses. I'm learning this course and practice about writing codes from React and Node.js"
              ghLink="https://github.com/Nwpatt/react_nwpatt_kongruksiam"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="carbonX"
              description="This project is make for our first competition with organization about carbon credits and we got 5th runner up from this competition."
              ghLink="https://github.com/pongkitkkpk/carbonX"
              demoLink="https://stevecarbonx.000webhostapp.com/SteveCarbonx/forms/homepage/home.php#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="github-desktop-project"
              description="Workshop from professor for teach us how to use Github in Desktop Application to being a programmer with this skill."
              ghLink="https://github.com/Nwpatt/github-desktop-project.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="WebApp.EnET-C"
              description="Workshop from professor for teach us about HTML and PHP for made Web Application and being a programmer with this skill."
              ghLink="https://github.com/Nwpatt/WebApp.EnET-C.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
