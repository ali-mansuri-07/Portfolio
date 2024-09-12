import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Import Sidebar component
import './ExperienceUpdate.css'; // Import CSS for Experience component
import { formatDate } from '../../utils/dateFormatter';

const ExperienceUpdate = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    company: '',
    designation: '',
    fromDate: '',
    toDate: '',
    isCurrent: false,
    description: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingExperienceId, setEditingExperienceId] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = () => {
    axios.get('http://localhost:5000/api/about/experiences')
      .then(response => setExperiences(response.data))
      .catch(error => console.error('Error fetching experiences:', error));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewExperience(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedExperience = {
      ...newExperience,
      fromDate: newExperience.fromDate ? new Date(newExperience.fromDate).toISOString().split('T')[0] : '',
      toDate: newExperience.isCurrent ? null : newExperience.toDate ? new Date(newExperience.toDate).toISOString().split('T')[0] : '',
    };

    if (editingExperienceId) {
      axios.put(`http://localhost:5000/api/about/experience/${editingExperienceId}`, formattedExperience)
        .then(() => {
          fetchExperiences(); // Refresh the table data after update
          resetForm();
          setIsFormVisible(false); // Close the form after update
        })
        .catch(error => console.error('Error updating experience:', error));
    } else {
      axios.post('http://localhost:5000/api/about/experience', formattedExperience)
        .then(() => {
          fetchExperiences(); // Refresh the table data after adding
          resetForm();
          setIsFormVisible(false); // Close the form after adding
        })
        .catch(error => console.error('Error adding experience:', error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/about/experience/${id}`)
      .then(() => {
        fetchExperiences(); // Refresh the table data after delete
      })
      .catch(error => console.error('Error deleting experience:', error));
  };

  const handleEditClick = (experience) => {
    setEditingExperienceId(experience._id);
    setNewExperience({
      company: experience.company,
      designation: experience.designation,
      fromDate: experience.fromDate,
      toDate: experience.toDate,
      isCurrent: experience.isCurrent,
      description: experience.description,
    });
    setIsFormVisible(true);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      resetForm();
    }
  };

  const resetForm = () => {
    setNewExperience({
      company: '',
      designation: '',
      fromDate: '',
      toDate: '',
      isCurrent: false,
      description: '',
    });
    setEditingExperienceId(null);
  };

  return (
    <div className="experience-update-wrapper">
      <Sidebar />
      <div className="experience-update">
        <h2>Manage Experiences</h2>
        <button className="add-experience-btn" onClick={toggleForm}>
          {isFormVisible ? 'Hide Form' : editingExperienceId ? 'Update Experience' : 'Add Experience'}
        </button>

        {isFormVisible && (
          <form onSubmit={handleSubmit} className="add-experience-form">
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={newExperience.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={newExperience.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fromDate">From Date:</label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={newExperience.fromDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="toDate">To Date:</label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={newExperience.toDate}
                onChange={handleChange}
                disabled={newExperience.isCurrent}
              />
            </div>

            <div className="form-group">
              <label htmlFor="isCurrent">Currently Working Here:</label>
              <input
                type="checkbox"
                id="isCurrent"
                name="isCurrent"
                checked={newExperience.isCurrent}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={newExperience.description}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn update-experience">
              {editingExperienceId ? 'Update Experience' : 'Add Experience'}
            </button>
          </form>
        )}

        <table className="experiences-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Designation</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Description</th>
              <th className="delete-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map(exp => (
              <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.designation}</td>
                <td>{formatDate(exp.fromDate)}</td>
                <td>{exp.isCurrent ? 'Present' : formatDate(exp.toDate)}</td>
                <td>{exp.description}</td>
                <td className="delete-column">
                  <button className="edit-btn" onClick={() => handleEditClick(exp)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(exp._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperienceUpdate;
