// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar" id="sd-bar">
      <nav>
        <ul>
        <li>
            <NavLink to="/" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
        <li>
            <NavLink to="/admin-dashboard" activeClassName="active">
              Admin Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/about" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/skills" activeClassName="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin-dashboard/experience" activeClassName="active">
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin-dashboard/contacts" activeClassName="active">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
