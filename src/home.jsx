import figma1 from "./assets/uxui/figma1.png";
import figma2 from "./assets/uxui/figma2.png";
import figma3 from "./assets/uxui/figma3.png";
import figma4 from "./assets/uxui/figma4.png";
import web1 from "./assets/web/web1.png";
import web2 from "./assets/web/web2.png";
import web4 from "./assets/web/web4.png";
import web5 from "./assets/web/web5.png";
import { useEffect } from "react";
import "./home.css";

function Home() {
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
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onWheel = (e) => {
    if (e.deltaY === 0) return;
    e.currentTarget.scrollLeft += e.deltaY;
  };

  const uxProjects = [
    {
      image: figma1,
      title: "Hospital Dashboard",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/nKTAGGXq6gtatDzAXcnuDU/Untitled?t=LegVbZzIjQbV47BI-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=23-147",
    },
    {
      image: figma2,
      title: "Hospital Dashboard",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/amHYIOHvFSV6jPq2NgoKmf/Untitled?node-id=185-743&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      image: figma3,
      title: "Hospital Dashboard",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/design/amHYIOHvFSV6jPq2NgoKmf/Untitled?node-id=0-1&p=f&t=U0RXVmFQsL6wu8Kx-0",
    },
    {
      image: figma4,
      title: "TaxiTera",
      description: "UI/UX design in Figma",
      link: "https://www.figma.com/proto/kzDrM7HJ81ojyqWQo19Y75/TaxiTera?node-id=1-7&t=U0RXVmFQsL6wu8Kx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1",
    },
  ];

  const webProjects = [
    {
      image: web1,
      title: "Project Name One",
      description: "React + Node.js full-stack web app",
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
    },
  ];

  const renderImageSlot = (proj) => {
    const slot = (
      <div className="proj-image-slot">
        <img src={proj.image} alt={proj.title} loading="lazy" />
        {proj.link && <span className="proj-image-overlay">View project →</span>}
      </div>
    );

    if (proj.link) {
      return (
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-image-link"
          aria-label={`View ${proj.title}`}
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
        <a href="#about">ABOUT</a>
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
          <span className="eyebrow">About</span>
          <p>
            I'm a UI/UX designer passionate about crafting intuitive and
            engaging digital experiences.
          </p>
          <p>
            Alongside my design work, I develop applications using the MERN
            stack and Flutter, which helps me bridge the gap between design
            and development. My focus is on creating interfaces that not only
            look great, but feel seamless and effortless to use.
          </p>
        </div>
      </section>

      <section className="projects" id="project">
        <h1 className="projects-heading reveal">Projects</h1>
        <p className="projects-sub reveal">
          A selection of interface designs and web applications I've shaped
          from first sketch to shipped product.
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
