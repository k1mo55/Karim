import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  ecommerce from "../../Assets/Projects/eccomercelaptop.png"
import firedeteection from "../../Assets/Projects/firedetectionlaptop.png"
import remoteDesktop from "../../Assets/Projects/desktopremotelaptop.png"
import aigenrater from "../../Assets/Projects/aicontentlaptop.png"
import asmToMachine from "../../Assets/Projects/asmtomachinelaptop.png"
import foodorderingsystemlaptop from "../../Assets/Projects/foodorderingsytemlaptop.png"
import hotelBookingsystemlaptop from "../../Assets/Projects/hotelbookingsystemlaptop.png"
import scoialmedialaptop from "../../Assets/Projects/scoialmedialaptop.png"
import openglgamelaptop from "../../Assets/Projects/openglgamelaptop.png"
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
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="An e-commerce website built with Express and Node.js, using Prisma and PostgreSQL. It employs JWT for secure authentication and authorization, supports multiple user levels (admins, users, and vendors), and offers advanced search and filtering along with features like browsing items, adding to the cart, and submitting ratings and comments."
              ghLink="https://github.com/k1mo55/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firedeteection}
              isBlog={false}
              title="FireDetectAI-YOLOv8 "
              description="Using Python and OpenCV, I implemented YOLOv8, a deep learning model for object detection. YOLO (You Only Look Once) detects objects in real-time by dividing an image into a grid and predicting bounding boxes and class probabilities. I trained it on a dataset of 2000 images to detect fire, then linked the system to Arduino code, allowing a robot to recognize fire in its surroundings."
              ghLink="https://github.com/k1mo55/FireDetectAI-YOLOv8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelBookingsystemlaptop}
              isBlog={false}
              title="Hotel-booking-system "
              description="A hotel booking system built with Node.js and Express, using MongoDB for database management, Cloudinary for image handling, Stripe for payments, and JWT for advanced authentication. It provides full booking functionality along with advanced search and filtering capabilities."
              ghLink="https://github.com/k1mo55/Hotel-booking-system"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodorderingsystemlaptop}
              isBlog={false}
              title="Food-Ordering-System"
              description="A food ordering system built with Node.js and Express, utilizing MongoDB for database management and Auth0 for authentication. It integrates Cloudinary for photo management, Stripe for payments, and features advanced search and filtering. The system includes all key functionalities such as ordering food, searching for restaurants, and viewing order status."
              ghLink="https://github.com/k1mo55/Food-Ordering-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remoteDesktop}
              isBlog={false}
              title="Remote-Desktop"
              description="Using Python, we developed a remote desktop application that allows control of another desktop via TCP connections. The application includes functions to handle keyboard input and screen sharing by segmenting packet sizes and creating a custom structure to encapsulate screen shares, keyboard input, and mouse input. It also features a graphical user interface (GUI) to display all these elements."
              ghLink="https://github.com/k1mo55/Remote-Desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aigenrater}
              isBlog={false}
              title="Mern-AI-generator"
              description="An app called Mer-AI Generator, built with Express.js and Node.js, utilizing MongoDB for data management. It implements authentication techniques using JWT and includes subscription functionality. The app leverages the OpenAI API to generate content based on user input."
              ghLink="https://github.com/k1mo55/Mern-AI-generator-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scoialmedialaptop}
              isBlog={false}
              title="social-media "
              description="A social media platform developed using Express, Node.js, and MongoDB, featuring advanced authentication with JWT. It includes full social media functionalities such as creating posts, writing comments, liking posts, and adding friends."
              ghLink="https://github.com/k1mo55/social-media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asmToMachine}
              isBlog={false}
              title="Asm-To-Machine"
              description="Using JavaScript, I developed a program to translate assembly language into machine instructions, employing advanced string manipulation techniques. This involved meticulously reading and parsing files to accurately interpret the assembly code, transforming it into the corresponding machine instructions"
              ghLink="https://github.com/k1mo55/Asm-To-Machine"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asmToMachine}
              isBlog={false}
              title="Machine-To-Asm"
              description="Using JavaScript, I developed a program to convert machine instructions back into assembly language. This involved intricate string manipulation and file reading to accurately reconstruct the original assembly code from machine-level representations. Advanced parsing algorithms ensured a precise transformation, facilitating a seamless transition between machine instructions and their corresponding assembly format."
              ghLink="https://github.com/k1mo55/Machine-To-Asm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openglgamelaptop}
              isBlog={false}
              title="RapidFireC"
              description="A complex 2D shooting game developed using OpenGL and C++, showcasing advanced graphics rendering techniques and engaging gameplay mechanics. The game utilizes OpenGL's capabilities to create vibrant 2D visuals and smooth animations, delivering an immersive player experience. Featuring intricate mechanics such as player movement and dynamic interactions, this project demonstrates a strong grasp of game development principles and C++ programming."
              ghLink="https://github.com/k1mo55/RapidFireC"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
