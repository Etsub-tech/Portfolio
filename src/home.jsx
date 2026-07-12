import figma1 from "./assets/uxui/figma1.png";
import figma2 from "./assets/uxui/figma2.png";
import figma3 from "./assets/uxui/figma3.png";
import figma4 from "./assets/uxui/figma4.png";
import web1 from "./assets/web/web1.png";
import web2 from "./assets/web/web2.png";
import web4 from "./assets/web/web4.png";
import web5 from "./assets/web/web5.png";
import { useEffect } from "react";
import './home.css';

function Home() {

// inside Home():
useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
  const year = new Date().getFullYear();

  const onWheel = (e) => {
    if (e.deltaY === 0) return;
    e.currentTarget.scrollLeft += e.deltaY;
  };

  // ✅ Define projects outside JSX
  const uxProjects = [
    {
      image: figma1,
      title: "Hospital Dashboard",
      description: "UI/UX Design in Figma"
     // link: https://www.figma.com/proto/nKTAGGXq6gtatDzAXcnuDU/Untitled?t=LegVbZzIjQbV47BI-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=23-147;
    },
    {
      image: figma2,
      title: "Hospital Dashboard",
      description: "UI/UX Design in Figma"
     // link: https://www.figma.com/proto/amHYIOHvFSV6jPq2NgoKmf/Untitled?node-id=185-743&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1;
    },
    {
      image: figma3,
      title: "Hospital Dashboard",
      description: "UI/UX Design in Figma"
     // link: https://www.figma.com/design/amHYIOHvFSV6jPq2NgoKmf/Untitled?node-id=0-1&p=f&t=U0RXVmFQsL6wu8Kx-0
    }
    ,
    {
      image: figma4,
      title: "Hospital Dashboard",
      description: "UI/UX Design in Figma"
     // link: https://www.figma.com/proto/kzDrM7HJ81ojyqWQo19Y75/TaxiTera?node-id=1-7&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1
    }
    // Add more projects here later
  ];

  const webProjects = [
  {
    image: web1,
    title: "Project Name One",
    description: "React + Node.js full-stack web app",
    // link: "https://your-live-url.com",
  },
  {
    image: web2,
    title: "Project Name Two",
    description: "MERN stack application with auth",
  },
  {
    image: web4,
    title: "Project Name Three",
    description: "Responsive portfolio / business site",
  },
  {
    image: web5,
    title: "Project Name Four",
    description: "Interactive dashboard web app",
  }];

  return (
    <>
      {/* Top Navigation */}
      <div className="top-nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* Hero Section */}
      <section className="home" id="home">
        <div className="hero">
          <div className="name">
            <h1>ETSUB AMHA</h1>
            <span>A PASSIONATE WEB DEVELOPER AND UX/UI DESIGNER</span>
          </div>
          <div style={{ marginRight: "900px" }}></div>
        </div>
      </section>

      {/* About Section */}
      <div className="second" id="about">
        <div className="img-texts">
          <p>
            I’m a UI/UX designer passionate about crafting intuitive and engaging
            digital experiences. Alongside my design work, I develop applications
            using the MERN stack and Flutter, which helps me bridge the gap between
            design and development. My focus is on creating interfaces that not only
            look great but also feel seamless and user‑friendly.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects" id="project">
        <div>
          <h1 style={{ fontSize: "100px" }}>PROJECTS</h1>
        </div>

        <h2 className="row-title">UX/UI Designs</h2>
<div className="ux-ui" onWheel={onWheel}>
  {uxProjects.map((proj, i) => (
    <div className="proj-card" key={i}>
      <div className="proj-image-slot">
        <img src={proj.image} alt={proj.title} />
      </div>
      <h3>{proj.title}</h3>
      <p>{proj.description}</p>
      {proj.link && (
        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">
          View Project
        </a>
      )}
    </div>
  ))}
</div>


        <h2 className="row-title">Web Applications</h2>
<div className="web" onWheel={onWheel}>
  {webProjects.map((proj, i) => (
    <div className="proj-card reveal" key={i}>
      <div className="proj-image-slot">
        <img src={proj.image} alt={proj.title} />
      </div>
      <h3>{proj.title}</h3>
      <p>{proj.description}</p>
      {proj.link && (
        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">
          View Project
        </a>
      )}
    </div>
  ))}
</div>
      </div>

      {/* Footer Section */}
      <footer className="site-footer" id="contact">
        <div className="footer-top reveal">
          <h2>
            LET'S BUILD
            <br />
            SOMETHING GOOD.
          </h2>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-label">Contact</span>
            <a href="mailto:etsubamha4@gmail.com">etsubamha4@gmail.com</a>
            <a href="tel:+251910287010">+251 91 028 7010</a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Elsewhere</span>
            <a
              href="https://github.com/Etsub-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/etsub-amha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Site</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Etsub Amha</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </footer>
    </>
  );
}

export default Home;
