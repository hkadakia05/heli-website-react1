export default function SkillsSection() {
    return (
      <section className="skills-section reveal">
        <div className="user">
  
          {/* Languages */}
          <div className="tech">
            <h2>Languages</h2>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <img
              src="https://icongr.am/devicon/c-original.svg?size=128&color=currentColor"
              alt="C"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              alt="C++"
            />
            <p>
              My favored languages for programming, software engineering,
              <br />and data analysis.
            </p>
          </div>
  
          {/* Front-End */}
          <div className="tech">
            <h2>Front-End</h2>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <p>My preferred technologies for front-end web development.</p>
          </div>
  
          {/* Backend */}
          <div className="tech">
            <h2>Backend</h2>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
              alt="PostgreSQL"
              style={{ width: '4rem' }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Java"
              style={{ width: '4rem' }}
            />
            <i className="devicon-postman-plain colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <p>My preferred technologies for backend development.</p>
          </div>
  
          {/* Tools */}
          <div className="tech">
            <h2>Tools</h2>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-visualstudio-plain colored"></i>
            <i className="devicon-github-plain-wordmark colored"></i>
            <i className="devicon-docker-plain-wordmark colored"></i>
            <p>My favorite tools for version control, and code editing.</p>
          </div>
  
        </div>
      </section>
    );
  }
  