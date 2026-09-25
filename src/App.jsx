import { useEffect, useState } from "react";
import { projects } from "./data/projects";
import "./index.css";

const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

const projectUrl = (slug) => `?project=${encodeURIComponent(slug)}`;

const cleanCurrentUrl = () => {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
};

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  cleanCurrentUrl();
};

const returnHomeTo = (sectionId) => {
  window.sessionStorage.setItem("portfolio-section", sectionId);
  window.location.assign(import.meta.env.BASE_URL);
};

function LinkIcon({ name }) {
  const iconProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "github") {
    return (
      <svg {...iconProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M7 10v7M7 7h.01M11 17v-7M11 13a3.5 3.5 0 0 1 7 0v4" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const handlePress = (event) => {
    event.currentTarget.classList.add("is-pressed");
    if ("vibrate" in navigator) navigator.vibrate(15);
  };

  const handleRelease = (event) => {
    event.currentTarget.classList.remove("is-pressed");
  };

  return (
    <a
      className="project-card"
      href={projectUrl(project.slug)}
      onPointerDown={handlePress}
      onPointerUp={handleRelease}
      onPointerCancel={handleRelease}
      onPointerLeave={handleRelease}
      aria-label={`View ${project.title} project details`}
    >
      <div className="project-card-header">
        <span className="project-type">{project.type}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="project-tools">
        {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
      </div>
      <span className="project-link">Open project <span aria-hidden="true">→</span></span>
    </a>
  );
}

function HomePage() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    cleanCurrentUrl();
    const requestedSection = window.sessionStorage.getItem("portfolio-section");
    window.sessionStorage.removeItem("portfolio-section");

    window.requestAnimationFrame(() => {
      if (requestedSection) {
        document.getElementById(requestedSection)?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  useEffect(() => {
    const sectionIds = ["top", "projects", "links"];

    const updateActiveSection = () => {
      const triggerPoint = window.scrollY + (window.innerHeight * 0.35);
      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= triggerPoint) currentSection = sectionId;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const goToSection = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <button className={activeSection === "top" ? "is-active" : ""} aria-current={activeSection === "top" ? "location" : undefined} type="button" onClick={() => goToSection("top")}>About</button>
          <button className={activeSection === "projects" ? "is-active" : ""} aria-current={activeSection === "projects" ? "location" : undefined} type="button" onClick={() => goToSection("projects")}>Projects</button>
          <button className={activeSection === "links" ? "is-active" : ""} aria-current={activeSection === "links" ? "location" : undefined} type="button" onClick={() => goToSection("links")}>Links</button>
        </nav>
      </header>

      <main id="main">
        <section className="intro-section" id="top">
          <div className="intro-heading">
            <div>
              <h1>Justin Nguyen</h1>
              <p className="intro-role">
                Computer Science graduate focused on IT support, desktop troubleshooting, and networking.
              </p>
            </div>
          </div>

          <p className="intro-copy">
            I’m pursuing entry-level IT support, help desk, and desktop support roles. I bring hands-on Windows and hardware experience, customer-service experience, and a habit of documenting troubleshooting clearly.
          </p>

          <div className="strength-list">
            <article>
              <h3>Hands-on support</h3>
              <p>Windows installation, drive imaging, RAM and SSD upgrades, driver troubleshooting, Device Manager, and Disk Management.</p>
            </article>
            <article>
              <h3>Customer service</h3>
              <p>More than three years helping customers in retail and front-desk environments while staying calm and clear under pressure.</p>
            </article>
            <article>
              <h3>Documentation</h3>
              <p>Troubleshooting notes and repeatable runbooks that record the issue, steps taken, result, and next action.</p>
            </article>
          </div>

          <div className="facts" aria-label="Candidate details">
            <div>
              <span>Education</span>
              <strong>B.S. Computer Science</strong>
              <p>California State University, Fullerton · 2025</p>
            </div>
            <div>
              <span>Academic</span>
              <strong>3.82 GPA</strong>
              <p>Magna Cum Laude · Mathematics minor</p>
            </div>
            <div>
              <span>Direction</span>
              <strong>IT Support to Networking</strong>
              <p>CompTIA A+ currently in progress</p>
            </div>
          </div>

        </section>

        <section className="projects section" id="projects">
          <div className="section-label">
            <span>01</span>
            <p>Projects</p>
          </div>

          <div className="projects-content">
            <div className="project-grid">
              {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
            </div>
          </div>
        </section>

        <section className="links-section section" id="links">
          <div className="section-label">
            <span>02</span>
            <p>Links</p>
          </div>

          <div className="links-content" aria-label="Contact and profile links">
            <a href="https://github.com/justindnguyen" target="_blank" rel="noreferrer"><LinkIcon name="github" />GitHub</a>
            <a href="https://www.linkedin.com/in/justin-nguyen-35604b1b1" target="_blank" rel="noreferrer"><LinkIcon name="linkedin" />LinkedIn</a>
            <a href="mailto:justindnguyen03@gmail.com"><LinkIcon name="email" />Email</a>
            <a href={assetUrl("resume.pdf")} target="_blank" rel="noreferrer"><LinkIcon name="resume" />Resume</a>
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectDetail({ project }) {
  useEffect(() => {
    document.title = `${project.title} | Justin Nguyen`;
    window.scrollTo(0, 0);
    return () => { document.title = "Justin Nguyen | IT Support"; };
  }, [project]);

  const hasImages = project.images?.length > 0;
  const hasDocuments = project.documents?.length > 0;

  return (
    <>
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => returnHomeTo("top")}>About</button>
          <button className="is-active" aria-current="page" type="button" onClick={() => returnHomeTo("projects")}>Projects</button>
          <button type="button" onClick={() => returnHomeTo("links")}>Links</button>
        </nav>
      </header>

      <main className="detail-main" id="main">
        <button className="back-link" type="button" onClick={() => returnHomeTo("projects")}><span aria-hidden="true">←</span> All projects</button>

        <article className="detail-hero">
          <div className="detail-meta">
            <span className="project-type">{project.type}</span>
            <span className="project-status">{project.status}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-tools">
            {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </article>

        <div className="detail-layout">
          <aside className="detail-index" aria-label="Project page sections">
            <p>On this page</p>
            <button type="button" onClick={() => scrollToSection("progress")}>Progress</button>
            {hasImages && <button type="button" onClick={() => scrollToSection("images")}>Images</button>}
            <button type="button" onClick={() => scrollToSection("notes")}>Notes</button>
            <button type="button" onClick={() => scrollToSection("learned")}>What I learned</button>
            <button type="button" onClick={() => scrollToSection("problems")}>Problems and solutions</button>
            {hasDocuments && <button type="button" onClick={() => scrollToSection("documents")}>Documents</button>}
          </aside>

          <div className="detail-content">
            <section className="detail-section" id="progress">
              <p className="detail-number">01</p>
              <h2>Progress</h2>
              <ol className="progress-list">
                {project.progress.map((item) => (
                  <li className="progress-item" key={`${item.stage}-${item.title}`}>
                    <span className="progress-stage">{item.stage}</span>
                    <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            {hasImages && (
              <section className="detail-section" id="images">
                <p className="detail-number">02</p>
                <h2>Project images</h2>
                <div className="image-gallery">
                  {project.images.map((image) => (
                    <figure key={image.src}>
                      <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
                      {image.caption && <figcaption>{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <section className="detail-section" id="notes">
              <p className="detail-number">{hasImages ? "03" : "02"}</p>
              <h2>Working notes</h2>
              <ul className="detail-list">{project.notes.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="detail-section" id="learned">
              <p className="detail-number">{hasImages ? "04" : "03"}</p>
              <h2>What I learned</h2>
              <ul className="detail-list">{project.learned.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="detail-section" id="problems">
              <p className="detail-number">{hasImages ? "05" : "04"}</p>
              <h2>Problems and solutions</h2>
              <div className="problem-list">
                {project.problems.map((item) => (
                  <article className="problem-card" key={item.title}>
                    <div className="problem-heading"><h3>{item.title}</h3><span>{item.status}</span></div>
                    <dl>
                      <div><dt>Problem</dt><dd>{item.problem}</dd></div>
                      <div><dt>Approach</dt><dd>{item.approach}</dd></div>
                      <div><dt>Outcome</dt><dd>{item.outcome}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>

            {hasDocuments && (
              <section className="detail-section" id="documents">
                <p className="detail-number">{hasImages ? "06" : "05"}</p>
                <h2>Documentation</h2>
                <div className="document-list">
                  {project.documents.map((document) => (
                    <a href={assetUrl(document.file)} target="_blank" rel="noreferrer" key={document.file}>
                      <span><strong>{document.title}</strong>{document.description && <small>{document.description}</small>}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function App() {
  const slug = new URLSearchParams(window.location.search).get("project");
  const project = projects.find((item) => item.slug === slug);
  return slug && project ? <ProjectDetail project={project} /> : <HomePage />;
}

export default App;
