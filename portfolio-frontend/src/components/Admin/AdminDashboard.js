// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./AdminDashboard.css";
// import About1 from "../About1";

// function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//       <aside className="sidebar">
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/admin-dashboard/about" activeClassName="active">
//                 About Me
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/admin-dashboard/skills" activeClassName="active">
//                 Skills
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/admin-dashboard/projects" activeClassName="active">
//                 Projects
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="content">
//         <div>
//           <About1 />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;



import React from "react";
import Sidebar from "./Sidebar";  // Import the Sidebar component
import About1 from "../About1";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="content">
        <div id="about-content">
          <About1 />
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
