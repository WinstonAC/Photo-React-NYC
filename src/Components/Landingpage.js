import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";

export default function Landingpage() {
  return (
    <div className="body">
      <div className="titles">
        <div className="header"></div>

        <div className="menu-container">
          <ul>
            <Link
              to="/photolanding"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Photogrpahy</li>
            </Link>
            <Link
              to="/aboutme"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>About Me</li>
            </Link>
            <Link
              to="/events"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Events</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
