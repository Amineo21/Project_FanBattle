import { useRef, useEffect, useState, ReactNode } from "react";
import "../../css/slide.css";




// Définition des types pour les données utilisateurs
interface User {
  date: ReactNode;
  id: number;
  username: string;
  email: string;
  country: string;
}

// Définition des types pour les matières (subjects)
interface Subject {
  id: number;
  subject: string;
  start: string;
  end: string;
}

const Card_Slider: React.FC = () => {
  // Référence du conteneur du slider
  const containerRef = useRef<HTMLDivElement | null>(null);

  // État pour stocker les utilisateurs et les matières
  const [users, setUsers] = useState<User[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Fonction pour faire défiler à gauche
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 1100;
    }
  };

  // Fonction pour faire défiler à droite
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 1100;
    }
  };

  // Récupération des utilisateurs (simulée)
  useEffect(() => {
    fetch("./app/Models/User.php")
      .then((response) => response.json())
      .then((data) =>
        setUsers(
          data.map((user:any) => ({
            id: user.id,
            date_of_birth: user.date,
            
          }))
        )
      );
  }, []);

  // Récupération des matières (simulée)
  useEffect(() => {
    setSubjects([
      { id: 1, subject: "Math", start: "2024-03-01", end: "2024-06-30" },
      { id: 2, subject: "Physics", start: "2024-02-15", end: "2024-05-20" },
      { id: 3, subject: "Chemistry", start: "2024-04-01", end: "2024-07-15" },
    ]);
  }, []);

  return (
    <section className="card-slider-container">
      <div className="main-slider-container">
        <button className="slider-icon left" onClick={handleScrollLeft}>
          Left
        </button>
        <div className="slider" ref={containerRef}>
          {users.map((user) => (
            <div className="slider-card" key={user.id}>
              <div className="card-detail">
                <p className="slider-card-title">Username: {user.date}</p>
                <p className="slider-card-title">Email: {user.email}</p>
                <p className="slider-card-title">Country: {user.country}</p>
              </div>
            </div>
          ))}
          {subjects.map((subject) => (
            <div className="slider-card" key={subject.id}>
              <div className="card-detail">
                <p className="slider-card-title">Subject: {subject.subject}</p>
                <p className="slider-card-title">Start Date: {subject.start}</p>
                <p className="slider-card-title">End Date: {subject.end}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-icon right" onClick={handleScrollRight}>
          Right
        </button>
      </div>
    </section>
  );
};

export default Card_Slider;
