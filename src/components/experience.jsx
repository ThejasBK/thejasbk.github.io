// src/components/Experience.jsx
import React from 'react';
import './Experience.css'; // We'll create this CSS file next

function Experience() {
  const experiences = [
    {
      role: "Data Scientist III",
      company: "Walmart, Inc., Bentonville, AR",
      dates: "Aug 2023 - Present",
      details: [
        "Led a team in designing and implementing an end-to-end pipeline for real-time sales forecasts. [cite: 1]",
        "Optimized a forecasting service pipeline using GPU multiprocessing, reducing processing time by 40% without increasing model run costs. [cite: 2]",
        "Reduced BigQuery cloud costs by 95%, improving query speed by 70%. [cite: 3]",
        "Developed and contributed to a Python package adopted across multiple teams within Sam's Club. [cite: 4]",
        "Collaborated with a cohort from the University of Arkansas on graph neural network for item similarity, improving product recommendations. [cite: 5]",
        "Participated in hackathons focused on LLMs and item similarity with deep learning, achieving top results. [cite: 6]"
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Colorado, Boulder, CO",
      dates: "Dec 2021 - Apr 2024",
      details: [
        "Improved image embedding algorithm performance by 25% with GPU acceleration. [cite: 7]",
        "Implemented a topic modeling algorithm for image categorization. [cite: 8]",
        "Created and deployed a survey portal with JavaScript, incorporating active learning for user preference capture.",
        "Enhanced consumer marketing strategies by optimizing image mining algorithms. [cite: 9]"
      ]
    },
    {
      role: "Data Analyst",
      company: "Goodiebag Food Co., Boulder, CO",
      dates: "May 2023 - Aug 2023",
      details: [
        "Developed dashboard to track key customer metrics and business KPIs, reducing reporting time by 60%. [cite: 10]",
        "Optimized an end-to-end data pipeline, improving processing and storing speed by 25%. [cite: 11]",
        "Integrated diverse datasets via web scraping and APIs for market research and decision-making. [cite: 12]"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Walmart, Inc., Dallas, TX",
      dates: "Jun 2022 - Aug 2022",
      details: [
        "Implemented a deep learning algorithm, boosting sales forecasting accuracy by 20%. [cite: 13]",
        "Reduced computing costs by 94% and model runtime by 86% by optimizing the forecasting pipeline. [cite: 14]",
        "Built Spark-based pipeline for larger datasets enabling faster model training and data analysis. [cite: 15]"
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="experience-dates">{exp.dates}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;