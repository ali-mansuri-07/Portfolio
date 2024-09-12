import React, { useEffect, useState } from "react";
import "./Projects1.css";
import axios from 'axios';

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the backend
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
        console.log("Projects data:", response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  // Function to split projects into rows of 3
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const projectRows = chunkArray(projects, 3);

  return (
    <div className="project" id="Projects">
      <div className="heading">
        <h1 className="project_heading">My Projects</h1>
      </div>
      <div className="container">
        {projectRows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((project, projectIndex) => (
              <div className="col__3" key={projectIndex}>
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img src={project.imageUrl} alt={project.name} className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta absolute">
                    <h5 className="project__text">{project.name}</h5>
                    <h4 className="project__text">{project.description}</h4>
                    <a href={project.link} className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
