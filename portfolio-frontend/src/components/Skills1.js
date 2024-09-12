import React, { useEffect, useState } from 'react';
import './Skills1.css';
import axios from 'axios';

function Skills1() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Fetch skills from the backend
        axios.get('http://localhost:5000/api/skills')
            .then(response => {
                setSkills(response.data);
                console.log("data = "+response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    // Function to split skills into rows of 4
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        console.log("result = "+ result.length);
        return result;
    };

    const skillRows = chunkArray(skills, 4);

    return (
        <div className='Skills'>
            <section className="skills" id="Skills">
                <h2 className="skill-header">My Skills</h2>

                <div className="skills-wrapper">
                    {skillRows.map((row, rowIndex) => (
                        <div className={`skill-set animate__animated animate__pulse`} key={rowIndex}>
                            {row.map((skill, skillIndex) => (
                                <img
                                    key={skillIndex}
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    loading="lazy"
                                    className="icon icon-card"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills1;
