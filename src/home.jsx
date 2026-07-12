import figma1 from "./assets/uxui/figma1.png";
import figma2 from "./assets/uxui/figma2.png";
import figma3 from "./assets/uxui/figma3.png";
import figma4 from "./assets/uxui/figma4.png";
import web1 from "./assets/web/web1.png";
import web2 from "./assets/web/web2.png";
import web4 from "./assets/web/web4.png";
import web5 from "./assets/web/web5.png";
import { useEffect } from "react";
import { SKILLS } from "./skill-icons";
import "./home.css";

function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => el.classList.add("pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onWheel = (e) => {
    if (e.deltaY === 0) return;
    e.currentTarget.scrollLeft += e.deltaY;
  };

  const roles = [
    {
      label: "Frontend Developer",
      description:
        "Building responsive, accessible interfaces with React, JavaScript and CSS.",
    },
    {
      label: "UX/UI Designer",
      description: "Designing interfaces and user flows in Figma before a line of code is written.",
    },
    {
      label: "Mobile application developer",
      description:
        "Building intuitive mobile apps with Flutter, focusing on smooth user experiences and clean design.",
    },
    {
      label: "Full Stack web developer",
      description:
        "Developing responsive web applications with React and Node.js, from frontend interfaces to backend logic.",
    },
  ];

  const uxProjects = [
    {
      image: figma1,
      title: "Perfume Shope Mobile App Design",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/nKTAGGXq6gtatDzAXcnuDU/Untitled?t=LegVbZzIjQbV47BI-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=23-147",
    },
    {
      image: figma2,
      title: "Furniture Shope Wbsite Design",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/qOSlcii8DAXoub6YaRUEnJ/Untitled?node-id=58-269",
    },
    {
      image: figma3,
      title: "Fitness Center",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/amHYIOHvFSV6jPq2NgoKmf/Untitled?node-id=185-743&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      image: figma4,
      title: "TexiTera, nearby taxi terminal locator",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/kzDrM7HJ81ojyqWQo19Y75/TaxiTera?node-id=1-7&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1",
    },
  ];

  const webProjects = [
    {
      image: web1,
      title: "Care Centeral",
      description: "Full-stack web app built with React and Vite",
      link: "https://care-centeral.vercel.app/"
    },
    {
      image: web2,
      title: "AI-Assisted meal plan generator",
      description: "React + Node.js application with authentication",
    },
    {
      image: web4,
      title: "TexiTera, nearby taxi terminal locator",
      description: "React + Node.js application with authentication",
    },
    {
      image: web5,
      title: "Project Name Four",
      description: "Interactive dashboard web app",
      link: "https://gotera-six.vercel.app/",
    },
  ];

  const renderImageSlot = (proj) => {
    const slot = (
      <div className="proj-image-slot">
        <img src={proj.image} alt={proj.title} loading="lazy" />
        {proj.link && <span className="proj-image-overlay">View project →</span>}
        {proj.tag && <span className="proj-tag">{proj.tag}</span>}
      </div>
    );

    if (proj.link) {
      return (
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-image-link"
          aria-label={`View ${proj.title} in Figma`}
        >
          {slot}
        </a>
      );
    }

    return slot;
  };

  return (
    <>
      <nav className="top-nav">
        <a href="#home">HOME</a>
        <a href="#expertise">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <section className="home" id="home">
        <div className="hero">
          <div className="name reveal">
            <span className="kicker">Web developer &amp; UI/UX designer</span>
            <h1>
              ETSUB
              <br />
              AMHA
            </h1>
            <p className="role">
              I design and build digital products end to end — from Figma
              wireframes to production React and Flutter apps.
            </p>
            <div className="scroll-cue" aria-hidden="true">
              <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="7" cy="6" r="1.6" fill="currentColor" />
              </svg>
              Scroll
            </div>
          </div>
        </div>
      </section>

      <section className="second" id="about">
        <span className="about-label">About</span>
        <div className="img-texts reveal">
        <span className="expertise-credential reveal">
          Software Engineering student at Addis Ababa University,College of Technology and Built Environment (CTBE)<p style={{color: "#e2c3e0", fontSize: "12px", paddingTop:"5px"}}>Interested in user‑friendly design</p>
        </span>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <h2 className="expertise-heading reveal">
          Engineering student <span className="accent">blending</span>code and
          <span className="accent"> design</span>.
        </h2>
        <p className="expertise-sub reveal">
          I'm a UI/UX designer passionate about crafting intuitive and engaging digital experiences.

          Alongside my design work, I develop applications using the MERN stack and Flutter, which helps me bridge the gap between design and development. My focus is on creating interfaces that not only look great, but feel seamless and effortless to use.
        </p>

        <div className="role-grid">
          {roles.map((role, i) => (
            <div className="role-card reveal" key={role.label} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="role-index">0{i + 1}</span>
              <h3>{role.label}</h3>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="skills-heading reveal">Skills</h2>
        <div className="skill-grid reveal">
          {SKILLS.map(({ name, Icon }) => (
            <div className="skill-chip" key={name}>
              <span className="skill-icon">
                <Icon />
              </span>
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="project">
        <h1 className="projects-heading reveal">Projects</h1>
        <p className="projects-sub reveal">
          Some of the projects I’ve built and designed, taking ideas from concept to polished product.
        </p>

        <h2 className="row-title reveal">UX/UI Designs</h2>
        <div className="scroller">
          <div className="ux-ui" onWheel={onWheel}>
            {uxProjects.map((proj, i) => (
              <div className="proj-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                {renderImageSlot(proj)}
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="row-title reveal">Web Applications</h2>
        <div className="scroller">
          <div className="web" onWheel={onWheel}>
            {webProjects.map((proj, i) => (
              <div className="proj-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                {renderImageSlot(proj)}
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
