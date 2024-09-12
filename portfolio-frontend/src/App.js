// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import Home from "./Home";
// import Footer from "./Footer";
// import About1 from "./components/About1";
// import Skills1 from "./components/Skills1";
// import Project1 from "./components/Project1";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import UpdateAbout from "./components/Admin/UpdateAbout";
// import SkillUpdate from "./components/Admin/SkillUpdate";
// import ProjectUpdate from "./components/Admin/ProjectUpdate";
// import ExperienceUpdate from "./components/Admin/ExperienceUpdate";
// import Experiences from "./components/Experiences";
// import Contact1 from "./components/Contact1";
// import AdminContacts from "./components/Admin/AdminContacts";

// function App() {
//   return (
//     <div className="App"> 
//       <Router>
//         <Routes>
//           {/* Admin Dashboard Route */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/admin-dashboard/about" element={<UpdateAbout />} />
//           <Route path="/admin-dashboard/skills" element={<SkillUpdate />} />
//           <Route path="/admin-dashboard/projects" element={<ProjectUpdate />} />
//           <Route path="/admin-dashboard/experience" element={<ExperienceUpdate />} />
//           <Route path="/admin-dashboard/contacts" element={<AdminContacts />} />

//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//                 <About1 />
//                 <Experiences />
//                 <Skills1 />
//                 <Project1 />
//                 <Contact1 />
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import About1 from "./components/About1";
import Skills1 from "./components/Skills1";
import Project1 from "./components/Project1";
import Contact1 from "./components/Contact1";
import Footer from "./Footer";
import Home from "./Home";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UpdateAbout from "./components/Admin/UpdateAbout";
import SkillUpdate from "./components/Admin/SkillUpdate";
import ProjectUpdate from "./components/Admin/ProjectUpdate";
import ExperienceUpdate from "./components/Admin/ExperienceUpdate";
import AdminContacts from "./components/Admin/AdminContacts";
import Experiences from "./components/Experiences";
import Login from "./components/Admin/Login"; // Login component for admin authentication
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage to persist authentication
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    // Set token in localStorage after successful login
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Remove token from localStorage on logout
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  // Protected Route component to secure admin routes
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/admin-login" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About1 />
                <Experiences />
                <Skills1 />
                <Project1 />
                <Contact1 />
                <Footer />
              </>
            }
          />

          {/* Admin Login Route */}
          <Route path="/admin-login" element={<Login onLogin={handleLogin} />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/about"
            element={
              <ProtectedRoute>
                <UpdateAbout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/skills"
            element={
              <ProtectedRoute>
                <SkillUpdate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/projects"
            element={
              <ProtectedRoute>
                <ProjectUpdate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/experience"
            element={
              <ProtectedRoute>
                <ExperienceUpdate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/contacts"
            element={
              <ProtectedRoute>
                <AdminContacts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
