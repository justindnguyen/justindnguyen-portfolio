import { useEffect } from "react";
import { projects } from "./data/projects";
import "./index.css";

const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

const projectUrl = (slug) => `?project=${encodeURIComponent(slug)}`;

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
  return (
    <>
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a href="#top">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main id="main">
        <section className="intro-section" id="top">
          <div className="intro-heading">
            <div>
              <p className="overline">IT Support Portfolio</p>
              <h1>Justin Nguyen</h1>
              <p className="intro-role">
                Computer Science graduate focused on IT support, desktop troubleshooting, and networking.
              </p>
            </div>
            <a className="primary-link" href="#projects">View my projects <span aria-hidden="true">↓</span></a>
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
            <div className="projects-heading">
              <h2>Selected work and practice labs.</h2>
              <p>Each project focuses on practical support skills: setup, troubleshooting, testing, and documentation.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
            </div>
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
          <a href="./#top">About</a>
          <a href="./#projects">Projects</a>
        </nav>
      </header>

      <main className="detail-main" id="main">
        <a className="back-link" href="./#projects"><span aria-hidden="true">←</span> All projects</a>

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
            <a href="#progress">Progress</a>
            {hasImages && <a href="#images">Images</a>}
            <a href="#notes">Notes</a>
            <a href="#learned">What I learned</a>
            <a href="#problems">Problems and solutions</a>
            {hasDocuments && <a href="#documents">Documents</a>}
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
