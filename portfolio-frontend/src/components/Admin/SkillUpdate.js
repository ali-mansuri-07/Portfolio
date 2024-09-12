// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './SkillUpdate.css';

// function SkillUpdate() {
//     const [skills, setSkills] = useState([]);
//     const [newSkill, setNewSkill] = useState({
//         name: '',
//         imageUrl: ''
//     });
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         fetchSkills();
//     }, []);

//     const fetchSkills = () => {
//         axios.get('http://localhost:5000/api/skills')
//             .then(response => {
//                 setSkills(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching skills:', error);
//             });
//     };

//     const handleAddSkill = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5000/api/skills', newSkill)
//             .then(response => {
//                 alert('Skill added successfully!');
//                 setNewSkill({ name: '', imageUrl: '' });
//                 setShowAddForm(false);
//                 fetchSkills();
//             })
//             .catch(error => {
//                 console.error('Error adding skill:', error);
//             });
//     };

//     const handleDeleteSkill = (id) => {
//         axios.delete(`http://localhost:5000/api/skills/${id}`)
//             .then(response => {
//                 console.log("Id = "+ id)
//                 alert('Skill deleted successfully!');
//                 fetchSkills();
//             })
//             .catch(error => {
//                 console.error('Error deleting skill:', error);
//             });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewSkill(prevSkill => ({
//             ...prevSkill,
//             [name]: value
//         }));
//     };

//     return (
//         <div className="skill-update">
//             <h1>Update Skills</h1>
//             <button onClick={() => setShowAddForm(!showAddForm)} className="btn add-skill-btn">
//                 {showAddForm ? 'Close Form' : 'Add New Skill'}
//             </button>

//             {showAddForm && (
//                 <form onSubmit={handleAddSkill} className="add-skill-form">
//                     <div className="form-group">
//                         <label htmlFor="name">Skill Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={newSkill.name}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="imageUrl">Image URL:</label>
//                         <input
//                             type="text"
//                             id="imageUrl"
//                             name="imageUrl"
//                             value={newSkill.imageUrl}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn">Add Skill</button>
//                 </form>
//             )}

// <table className="skills-table">
//     <thead>
//         <tr>
//             <th>Skill</th>
//             <th>Image</th>
//             <th className="delete-column">Delete</th>
//         </tr>
//     </thead>
//     <tbody>
//         {skills.map(skill => (
//             <tr key={skill.id}>
//                 <td>{skill.name}</td>
//                 <td><img src={skill.imageUrl} alt={skill.name} className="skill-icon" /></td>
//                 <td className="delete-column">
//                     <button className="delete-btn" id='delete-btn' onClick={() => handleDeleteSkill(skill._id)}>Delete</button>
//                 </td>
//             </tr>
//         ))}
//     </tbody>
// </table>

//         </div>
//     );
// }

// export default SkillUpdate;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SkillUpdate.css';
import Sidebar from './Sidebar'; // Import the Sidebar component

function SkillUpdate() {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({
        name: '',
        imageUrl: ''
    });
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = () => {
        axios.get('http://localhost:5000/api/skills')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/skills', newSkill)
            .then(response => {
                alert('Skill added successfully!');
                setNewSkill({ name: '', imageUrl: '' });
                setShowAddForm(false);
                fetchSkills();
            })
            .catch(error => {
                console.error('Error adding skill:', error);
            });
    };

    const handleDeleteSkill = (id) => {
        axios.delete(`http://localhost:5000/api/skills/${id}`)
            .then(response => {
                console.log("Id = " + id);
                alert('Skill deleted successfully!');
                fetchSkills();
            })
            .catch(error => {
                console.error('Error deleting skill:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSkill(prevSkill => ({
            ...prevSkill,
            [name]: value
        }));
    };

    return (
        <div className="skill-update-container"> 
            <Sidebar /> 
            <div className="skill-update">
                <h1>Update Skills</h1>
                <button onClick={() => setShowAddForm(!showAddForm)} className="btn add-skill-btn" id="add-skill">
                    {showAddForm ? 'Close Form' : 'Add New Skill'}
                </button>

                {showAddForm && (
                    <form onSubmit={handleAddSkill} className="add-skill-form">
                        <div className="form-group">
                            <label htmlFor="name">Skill Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newSkill.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image URL:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                value={newSkill.imageUrl}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn">Add Skill</button>
                    </form>
                )}

                <table className="skills-table">
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Image</th>
                            <th className="delete-column">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map(skill => (
                            <tr key={skill.id}>
                                <td>{skill.name}</td>
                                <td><img src={skill.imageUrl} alt={skill.name} className="skill-icon" /></td>
                                <td className="delete-column">
                                    <button className="delete-btn" id="delete-btn" onClick={() => handleDeleteSkill(skill._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SkillUpdate;
