// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // We'll create this CSS file next

function Projects() {
  const projectList = [
    {
      title: "British Airways Data Science Job Simulation on Forage",
      date: "Completed: Jan 2024", //
      description: "A simulation focusing on applying data science skills to real-world aviation industry challenges.",
      details: [
        "Applied data analysis techniques to optimize business operations and enhance decision-making.", //
        "Built an interactive dashboard to track customer interactions, improving insights into KPIs.", //
        "Designed and implemented data pipelines for seamless data integration and transfer across systems." //
      ],
      // You can add a link to the project if available, e.g.:
      // link: "https://www.theforage.com/simulations/british-airways-data-science"
    }
    // You can add more project objects here in the future
    // {
    //   title: "Another Project",
    //   date: "Date/Duration",
    //   description: "A brief description of your project.",
    //   details: [
    //     "Key achievement or feature 1.",
    //     "Key achievement or feature 2."
    //   ],
    //   link: "https://example.com/your-project-link"
    // }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            {project.date && <p className="project-date">{project.date}</p>}
            {project.description && <p className="project-description">{project.description}</p>}
            {project.details && project.details.length > 0 && (
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
            {project.link && (
              <p className="project-link">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;