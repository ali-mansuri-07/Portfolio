// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ProjectUpdate.css';

// function ProjectUpdate() {
//   const [projects, setProjects] = useState([]);
//   const [newProject, setNewProject] = useState({
//     name: '',
//     link: '',
//     imageUrl: '',
//     description: '',
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [editingProjectId, setEditingProjectId] = useState(null); // Track which project is being edited

//   useEffect(() => {
//     // Fetch projects from the backend
//     axios.get('http://localhost:5000/api/projects')
//       .then(response => setProjects(response.data))
//       .catch(error => console.error('Error fetching projects:', error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (editingProjectId) {
//       // Update existing project
//       axios.put(`http://localhost:5000/api/projects/${editingProjectId}`, newProject)
//         .then(response => {
//           setProjects(prevProjects => 
//             prevProjects.map(project => 
//               project._id === editingProjectId ? response.data : project
//             )
//           );
//           setEditingProjectId(null);
//           setNewProject({
//             name: '',
//             link: '',
//             imageUrl: '',
//             description: '',
//           });
//           setIsFormVisible(false); // Hide form after submission
//         })
//         .catch(error => console.error('Error updating project:', error));
//     } else {
//       // Add new project
//       axios.post('http://localhost:5000/api/projects', newProject)
//         .then(response => {
//           setProjects(prevProjects => [...prevProjects, response.data]);
//           setNewProject({
//             name: '',
//             link: '',
//             imageUrl: '',
//             description: '',
//           });
//           setIsFormVisible(false); // Hide the form after submission
//         })
//         .catch(error => console.error('Error adding project:', error));
//     }
//   };

//   const handleDelete = (id) => {
//     // Delete project
//     axios.delete(`http://localhost:5000/api/projects/${id}`)
//       .then(() => {
//         setProjects(prevProjects => prevProjects.filter(project => project._id !== id));
//       })
//       .catch(error => console.error('Error deleting project:', error));
//   };

//   const handleEditClick = (project) => {
//     setEditingProjectId(project._id); // Set the project to be edited
//     setNewProject({
//       name: project.name,
//       link: project.link,
//       imageUrl: project.imageUrl,
//       description: project.description,
//     });
//     setIsFormVisible(true); // Show the form when editing
//   };

//   const toggleForm = () => {
//     setIsFormVisible(!isFormVisible);
//     if (!isFormVisible) {
//       // Reset form if we are opening the form for a new project
//       setNewProject({
//         name: '',
//         link: '',
//         imageUrl: '',
//         description: '',
//       });
//       setEditingProjectId(null); // Ensure we're not editing when adding a new project
//     }
//   };

//   return (
//     <div className="project-update">
//       <h2>Manage Projects</h2>
//       <button className="add-project-btn" onClick={toggleForm}>
//         {isFormVisible ? 'Hide Form' : editingProjectId ? 'Update Project' : 'Add Project'}
//       </button>

//       {isFormVisible && (
//         <form onSubmit={handleSubmit} className="add-project-form">
//           <div className="form-group">
//             <label htmlFor="name">Project Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={newProject.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="link">Project Link:</label>
//             <input
//               type="text"
//               id="link"
//               name="link"
//               value={newProject.link}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="imageUrl">Project Image URL:</label>
//             <input
//               type="text"
//               id="imageUrl"
//               name="imageUrl"
//               value={newProject.imageUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Project Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={newProject.description}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="btn update-project">
//             {editingProjectId ? 'Update Project' : 'Add Project'}
//           </button>
//         </form>
//       )}

//       <table className="projects-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Link</th>
//             <th>Description</th>
//             <th className="delete-column">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map(project => (
//             <tr key={project._id}>
//               <td>{project.name}</td>
//               <td><a href={project.link} target="_blank" rel="noreferrer">{project.link}</a></td>
//               <td>{project.description}</td>
//               <td className="delete-column">
//                 <button className="edit-btn" onClick={() => handleEditClick(project)}>Edit</button>
//                 <button className="delete-btn" onClick={() => handleDelete(project._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProjectUpdate;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Import Sidebar component
import './ProjectUpdate.css';

function ProjectUpdate() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    link: '',
    imageUrl: '',
    description: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProjectId) {
      axios.put(`http://localhost:5000/api/projects/${editingProjectId}`, newProject)
        .then(response => {
          setProjects(prevProjects => 
            prevProjects.map(project => 
              project._id === editingProjectId ? response.data : project
            )
          );
          setEditingProjectId(null);
          setNewProject({
            name: '',
            link: '',
            imageUrl: '',
            description: '',
          });
          setIsFormVisible(false);
        })
        .catch(error => console.error('Error updating project:', error));
    } else {
      axios.post('http://localhost:5000/api/projects', newProject)
        .then(response => {
          setProjects(prevProjects => [...prevProjects, response.data]);
          setNewProject({
            name: '',
            link: '',
            imageUrl: '',
            description: '',
          });
          setIsFormVisible(false);
        })
        .catch(error => console.error('Error adding project:', error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => {
        setProjects(prevProjects => prevProjects.filter(project => project._id !== id));
      })
      .catch(error => console.error('Error deleting project:', error));
  };

  const handleEditClick = (project) => {
    setEditingProjectId(project._id);
    setNewProject({
      name: project.name,
      link: project.link,
      imageUrl: project.imageUrl,
      description: project.description,
    });
    setIsFormVisible(true);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      setNewProject({
        name: '',
        link: '',
        imageUrl: '',
        description: '',
      });
      setEditingProjectId(null);
    }
  };

  return (
    <div className="project-update-wrapper">
      <Sidebar />
      <div className="project-update">
        <h2>Manage Projects</h2>
        <button className="add-project-btn" onClick={toggleForm}>
          {isFormVisible ? 'Hide Form' : editingProjectId ? 'Update Project' : 'Add Project'}
        </button>

        {isFormVisible && (
          <form onSubmit={handleSubmit} className="add-project-form">
            <div className="form-group">
              <label htmlFor="name">Project Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProject.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="link">Project Link:</label>
              <input
                type="text"
                id="link"
                name="link"
                value={newProject.link}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Project Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={newProject.imageUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description:</label>
              <textarea
                id="description"
                name="description"
                value={newProject.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn update-project">
              {editingProjectId ? 'Update Project' : 'Add Project'}
            </button>
          </form>
        )}

        <table className="projects-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Link</th>
              <th>Description</th>
              <th className="delete-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project._id}>
                <td>{project.name}</td>
                <td><a href={project.link} target="_blank" rel="noreferrer">{project.link}</a></td>
                <td>{project.description}</td>
                <td className="delete-column">
                  <button className="edit-btn" onClick={() => handleEditClick(project)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(project._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectUpdate;
