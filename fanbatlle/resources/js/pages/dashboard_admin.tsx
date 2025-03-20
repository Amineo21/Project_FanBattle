import React, { useState, useEffect, ReactNode } from "react";
import '../../css/dashboard_admin.css';


// Définition des types pour les données
interface Vote {
  end_date: string;
  poll_question: string;
  start_date: string;
  
}
interface User {
  username: string;
  email: string;
  country: string;
}

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<"votes" | "users">("votes");
  const [votes, setVotes] = useState<Vote[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


//Appel des données:
  useEffect(() => {
    const fetchData = async () => {
      try {
        const votesResponse = await fetch("../Models/Vote.php ");
        const usersResponse = await fetch("../Models/User.php");

        if (!votesResponse.ok || !usersResponse.ok) {
          throw new Error("Erreur lors du chargement des données.");
        }

        const votesData: Vote[] = await votesResponse.json();
        const usersData: User[] = await usersResponse.json();

        setVotes(votesData);
        setUsers(usersData);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue s'est produite.");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

            {loading ? (
              <p>Chargement des données...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : currentView === "votes" ? (
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
                      <td>{vote.poll_question}</td>
                      <td>{vote.start_date}</td>
                      <td>{vote.end_date}</td>
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


