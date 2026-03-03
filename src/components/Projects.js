import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch repositories from GitHub
    fetch('https://api.github.com/users/hkadakia05/repos?sort=updated&per_page=20')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        // Filter out forked repositories and limit to 9 projects
        const originalRepos = data.filter(repo => !repo.fork).slice(0, 9);
        setProjects(originalRepos);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>
        
        {loading && <p className="loading-text">Loading projects...</p>}
        
        {error && <p className="error-text">Error: {error}</p>}
        
        {!loading && !error && projects.length === 0 && (
          <p className="error-text">No projects found.</p>
        )}
        
        {!loading && projects.length > 0 && (
          <>
            <p className="projects-intro">
              Here are some of my recent projects from GitHub. Each project represents
              a unique challenge and learning experience in software development.
            </p>

            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h3>{project.name}</h3>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </div>

                  <p className="project-description">
                    {project.description || 'No description available'}
                  </p>

                  <div className="project-footer">
                    {project.language && (
                      <span className="project-language">
                        <span className="language-dot"></span>
                        {project.language}
                      </span>
                    )}
                    <span className="project-stats">
                      <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                        </svg>
                        {project.stargazers_count}
                      </span>
                      <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        </svg>
                        {project.forks_count}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-more">
              <a
                href="https://github.com/hkadakia05?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="view-more-btn"
              >
                View More on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
