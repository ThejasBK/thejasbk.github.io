// src/components/Skills.jsx
import React from 'react';
import './skills.css'; // We'll create this CSS file next

function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "SQL", "R", "JavaScript"] 
    },
    {
      name: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "PySpark", "GluonTS", "Django", "Flask"] 
    },
    {
      name: "Tools & Platforms",
      skills: [
        "Git", "Docker", "Kubernetes", "Airflow", "Kubeflow", "Databricks", 
        "Apache Kafka", "GCP: BigQuery", "GCP: Dataflow", "GCP: Dataproc", 
        "GCP: Cloud Storage", "GCP: Vertex AI" 
      ]
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.name}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;