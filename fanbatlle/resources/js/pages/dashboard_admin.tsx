import React, { useState } from "react";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("votes");

  const votes = [
    { subject: "Subject1", start: "01-01-2000", end: "02-02-2001" },
    { subject: "Subject2", start: "01-02-2000", end: "02-02-2001" },
    { subject: "Subject3", start: "01-03-2000", end: "02-02-2001" },
    { subject: "Subject4", start: "01-04-2000", end: "02-02-2001" },
    { subject: "Subject5", start: "01-05-2000", end: "02-02-2001" },
  ];

  const users = [
    { username: "Username1", email: "aa@gmail.com", country: "France" },
    { username: "Username2", email: "bb@gmail.com", country: "Germany" },
    { username: "Username3", email: "cc@gmail.com", country: "Spain" },
    { username: "Username4", email: "dd@gmail.com", country: "Italia" },
    { username: "Username5", email: "ee@gmail.com", country: "Belgium" },
  ];

  return (
    <div className="container2">
      <div className="navbar">
        <span className="username">Username</span>
        <div className="nav-links">
          <span className="nav-item">Vote</span>
          <span className="nav-item">User</span>
          <button className="sign-out">Sign Out</button>
        </div>
      </div>
      <div className="containt">

      <h1 className="welcome">Welcome {"{Username}"}</h1>
      <div className="card">
        <div className="card-content card-container">
          <h2 className="card-title">
            {currentView === "votes" ? "Last votes" : "Last users"}
          </h2>
          {currentView === "votes" ? (
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {votes.map((vote, index) => (
                  <tr key={index}>
                    <td>{vote.subject}</td>
                    <td>{vote.start}</td>
                    <td>{vote.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
          <button
            className="nav-button left"
            onClick={() => setCurrentView("votes")}
          >
            &#9664;
          </button>
          <button
            className="nav-button right"
            onClick={() => setCurrentView("users")}
          >
            &#9654;
          </button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* CSS */
import '../../css/dashboard_admin.css'
