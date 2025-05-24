// src/components/Education.jsx
import React from 'react';
import './Education.css'; // We'll create this CSS file next

function Education() {
  const educationHistory = [
    {
      degree: "M.S. in Data Science",
      institution: "University of Colorado Boulder, USA",
      dates: "2021-2023",
      gpa: "GPA: 3.99/4.0" // [cite: 16]
    },
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "VTU, India",
      dates: "2016-2020",
      gpa: "GPA: 8.38/10.0" // [cite: 17]
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationHistory.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3> {/* [cite: 16] */}
            <h4>{edu.institution}</h4> {/* [cite: 16] */}
            <p className="education-dates">{edu.dates}</p> {/* [cite: 16] */}
            <p className="education-gpa">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;