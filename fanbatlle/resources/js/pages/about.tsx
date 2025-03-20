import { Link } from 'lucide-react';
import '../../css/about.css';



const EuStars = () => {
  return (
    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-xs transform origin-center animate-star"
            style={{
              animation: `starRotate 2s infinite ${i * 0.2}s`,
              opacity: 0.8,
              marginLeft: '2px',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-blue-500/5 blur-sm rounded-lg"></div>
    </div>
  );
};

export default function About() {

  return (
      <>
        
          {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a href="">Community</a>
            <a href="">Contact</a>
            <a href="">Link</a>
          <div>
            <button type="button">Sign in</button>
            <button type="button">Register</button>
          </div>
          </nav> */}

          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="Logo" width="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"> <a className="nav-link" href="#">Community</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
          </ul>
          <div className="buttons">
            <button className="btn btn-light sign">Sign in</button>
            <button className="btn register">Register</button>
          </div>
        </div>
      </div>
    </nav>

          {/* <!-- Présentation --> */}
          <section className="presentation text-center">
            <h1>Welcome to Article11</h1>
            <h3>"Your opinion is our matter"</h3>
            <button type="button" className="btn btn-dark">Try now</button>
          </section>

          {/* <!-- Section vidéo --> */}
          <section className="video text-center">
            <video controls>
              <source src="video.mp4" type="video/mp4" />
              <source src="video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </section>

          {/* <!-- Cartes de sujets --> */}
          <div className=" cards col-md-4">
            <div className="card m-3">
              <h4>title</h4>
              <p>description</p>
            </div>
            <div className="card m-3">
              <h4>title</h4>
              <p>description</p>
            </div>
            <div className="card m-3">
              <h4>title</h4>
              <p>description</p>
            </div>
          </div>
          
          {/* <!-- Footer --> */}
          <footer className="footer">
            <div className="container text-center">
              <p>© 2024 Article11. All rights reserved.</p>
            </div>
          </footer>
          
      </>
  );
}