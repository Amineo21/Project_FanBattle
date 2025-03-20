import React, { useState } from "react";

const VotePage: React.FC = () => {
  const [activePage, setActivePage] = useState("Vote now");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 relative">
      {/* Dégradé en diagonale (de haut gauche vers bas droit) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-[#003399]to- bg-gray-900 opacity-90"></div>

      {/* Barre de navigation */}
      <nav className="w-full bg-gray-900 text-white flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/1200px-User-Pict-Profil.svg.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-yellow-400 font-bold">Username</p>
            <p className="text-gray-400 text-sm">RealName</p>
          </div>
        </div>
        <div className="flex gap-6 text-yellow-400">
          {["Dashboard", "Community", "Vote now"].map((page) => (
            <a
              key={page}
              href="#"
              className={`relative group ${
                activePage === page ? "text-white font-bold" : "hover:text-white"
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
              <EuStars isActive={activePage === page} />
            </a>
          ))}
        </div>
        <button className="bg-gray-300 text-gray-900 px-4 py-1 rounded-md hover:bg-gray-400">
          Sign out
        </button>
      </nav>

      {/* Contenu principal */}
      <div className="flex flex-col items-center justify-center flex-grow p-10 relative z-10">
        {/* Carte du sujet agrandie */}
        <div className="w-[600px] h-[400px] bg-purple-300 flex flex-col justify-center items-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold">Subject</h2>
          <br />
          <p className="text-lg text-gray-700  px-4">Description</p>

          {/* Lien vers la documentation en bas de la carte */}
          <a
            href="#"
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Documentation
          </a>
        </div>

        {/* Boutons de vote avec animations */}
        <div className="flex gap-6 mt-6">
          <button className="bg-green-400 text-black px-6 py-3 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-green-500 hover:scale-110">
            ✅ For
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-yellow-500 hover:scale-110">
            ⚖️ Neutral
          </button>
          <button className="bg-red-400 text-black px-6 py-3 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-red-500 hover:scale-110">
            ❌ Against
          </button>
        </div>
      </div>
    </div>
  );
};

// Effet étoiles sur les liens (reste affiché si actif)
const EuStars: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`absolute -inset-1 transition-opacity duration-500 ${
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="text-yellow-400 text-xs transform origin-center animate-star"
          style={{
            animation: `starRotate 2s infinite ${i * 0.2}s`,
            opacity: 0.8,
            marginLeft: "2px",
          }}
        >
          ★
        </span>
      ))}
    </div>
    <div className="absolute inset-0 bg-blue-500/5 blur-sm rounded-lg"></div>
  </div>
);

export default VotePage;

