// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./UpdateAbout.css";

// function UpdateAbout() {
//   const [aboutData, setAboutData] = useState({
//     name: "",
//     aboutText: "",
//     profileImg: "",
//     resumeUrl: "",
//     githubUrl: "",
//     instagramUrl: "",
//     linkedInUrl: "",
//     twitterUrl: ""
//   });

//   useEffect(() => {
//     // Fetch the current about data from the backend
//     axios
//       .get("http://localhost:5000/api/about")
//       .then((response) => setAboutData(response.data))
//       .catch((error) => console.error("Error fetching about data:", error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAboutData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the updated data to the backend
//     axios
//       .put("http://localhost:5000/api/about", aboutData)
//       .then((response) => {
//         alert("About Me updated successfully!");
//         navigate("/admin-dashboard");
//       })
//       .catch((error) => console.error("Error updating about data:", error));
//   };

//   return (
//     <div className="update-about component__space" id="UpdateAbout">
//       <div className="container">
//         <h2>Update About Me</h2>
//         <form onSubmit={handleSubmit} className="about-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={aboutData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="aboutText">About Text:</label>
//             <textarea
//               id="aboutText"
//               name="aboutText"
//               value={aboutData.aboutText}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="profileImg">Profile Image URL:</label>
//             <input
//               type="text"
//               id="profileImg"
//               name="profileImg"
//               value={aboutData.profilePhotoUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="resumeLink">Resume Link:</label>
//             <input
//               type="text"
//               id="resumeLink"
//               name="resumeLink"
//               value={aboutData.resumeUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="githubUrl">GitHub URL:</label>
//             <input
//               type="text"
//               id="githubUrl"
//               name="githubUrl"
//               value={aboutData.githubUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="instagramUrl">Instagram URL:</label>
//             <input
//               type="text"
//               id="instagramUrl"
//               name="instagramUrl"
//               value={aboutData.instagramUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="linkedInUrl">LinkedIn URL:</label>
//             <input
//               type="text"
//               id="linkedInUrl"
//               name="linkedInUrl"
//               value={aboutData.linkedInUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="twitterUrl">Twitter URL:</label>
//             <input
//               type="text"
//               id="twitterUrl"
//               name="twitterUrl"
//               value={aboutData.twitterUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="btn" id="update-btn">Update About</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateAbout;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateAbout.css";
import Sidebar from './Sidebar'; // Import Sidebar

function UpdateAbout() {
  const [aboutData, setAboutData] = useState({
    name: "",
    home_heading:"",
    aboutText: "",
    profileImg: "",
    resumeUrl: "",
    githubUrl: "",
    instagramUrl: "",
    linkedInUrl: "",
    twitterUrl: "",
    experiences: [],
  });

  useEffect(() => {
    // Fetch the current about data from the backend
    axios
      .get("http://localhost:5000/api/about")
      .then((response) => setAboutData(response.data))
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated data to the backend
    axios
      .put("http://localhost:5000/api/about", aboutData)
      .then((response) => {
        alert("About Me updated successfully!");
        navigate("/admin-dashboard");
      })
      .catch((error) => console.error("Error updating about data:", error));
  };

  return (
    <div className="update-about-container"> 
      <Sidebar />
      <div className="update-about" id="UpdateAbout">
          <h2>Update About Me</h2>
          <form onSubmit={handleSubmit} className="about-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={aboutData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="home_heading">Name:</label>
              <input
                type="text"
                id="home_heading"
                name="home_heading"
                value={aboutData.home_heading}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="aboutText">About Text:</label>
              <textarea
                id="aboutText"
                name="aboutText"
                value={aboutData.aboutText}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="profileImg">Profile Image URL:</label>
              <input
                type="text"
                id="profileImg"
                name="profileImg"
                value={aboutData.profilePhotoUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="resumeLink">Resume Link:</label>
              <input
                type="text"
                id="resumeLink"
                name="resumeUrl"
                value={aboutData.resumeUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="githubUrl">GitHub URL:</label>
              <input
                type="text"
                id="githubUrl"
                name="githubUrl"
                value={aboutData.githubUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="instagramUrl">Instagram URL:</label>
              <input
                type="text"
                id="instagramUrl"
                name="instagramUrl"
                value={aboutData.instagramUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedInUrl">LinkedIn URL:</label>
              <input
                type="text"
                id="linkedInUrl"
                name="linkedInUrl"
                value={aboutData.linkedInUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="twitterUrl">Twitter URL:</label>
              <input
                type="text"
                id="twitterUrl"
                name="twitterUrl"
                value={aboutData.twitterUrl}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn" id="update-btn">Update About</button>
          </form>
        </div>
      </div>
  );
}

export default UpdateAbout;
