import "./Project.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with product filtering, cart, and payment system. Built for high performance and sleek UX.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal portfolio to showcase my design and coding projects. Features a stunning premium dark aesthetic.",
    skills: ["React", "CSS", "Animations"]
  },
  {
    title: "Weather App",
    img: img3,
    desc: "Responsive app showing real-time weather data using API integration with sleek glassmorphism UI.",
    skills: ["React", "CSS", "API"]
  },
  {
    title: "Blog Website",
    img: img4,
    desc: "Clean and simple modern blogging platform with markdown support and an engaging reader layout.",
    skills: ["HTML", "Tailwind", "JavaScript"]
  },
  {
    title: "Game Landing Page",
    img: img5,
    desc: "Immersive landing page for a game with scroll animations, glowing elements, and parallax effects.",
    skills: ["React", "CSS", "GSAP"]
  },
  {
    title: "Task Manager",
    img: img6,
    desc: "Task tracking web productivity app with drag & drop functionality, CRUD features, and clean UI.",
    skills: ["React", "CSS", "JS"]
  }
];

export default function Project() {
  return (
    <section className="project reveal" id="project">
      <div className="title section-title">
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-container container">
        {projects.map((project, index) => (
          <div className="project-card animate-fade-in-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="project-img-container">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay"></div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="skills">
                {project.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>

              <div className="btns">
                <a href="#" className="btn btn-outline" aria-label={`View GitHub for ${project.title}`}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="btn btn-primary" aria-label={`View Live Demo for ${project.title}`}>
                  <i className="fas fa-external-link-alt"></i> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}