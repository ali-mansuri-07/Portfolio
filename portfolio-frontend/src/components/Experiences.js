import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Experiences.css'; 
import { formatDate } from '../utils/dateFormatter';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch experiences from the API
    axios.get('http://localhost:5000/api/about/experiences')
      .then(response => setExperiences(response.data))
      .catch(error => console.error('Error fetching experiences:', error));
  }, []);

  return (
    <div className="experience-list" id='Experiences'>
      <h1>My Professional Experience</h1>
      <ul className="experience-items">
        {experiences.map(exp => (
          <li key={exp._id} className="experience-item">
            <h3>{exp.company}</h3>
            <p className="designation">{exp.designation}</p>
            <p className="date">
            {formatDate(exp.fromDate)} - {exp.isCurrent ? 'Present' : formatDate(exp.toDate)}
            </p>
            <p className="description">{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
