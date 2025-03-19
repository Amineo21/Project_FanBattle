import React, { useState } from 'react';

const DisplayPool = () => {
  const [voteId, setVoteId] = useState('');
  const [voteResult, setVoteResult] = useState('');

  const handleFetchVote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/votes/${voteId}`);
      const data = await response.json();
      setVoteResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Erreur lors de la récupération du sondage:', error);
      setVoteResult('Erreur: ' + error.toString());
    }
  };

  return (
    <div>
      <h2>Afficher un sondage</h2>
      <form onSubmit={handleFetchVote}>
        <div>
          <label htmlFor="vote_id">ID du sondage :</label>
          <input
            type="number"
            id="vote_id"
            value={voteId}
            onChange={(e) => setVoteId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Afficher</button>
      </form>
      <pre>{voteResult}</pre>
    </div>
  );
};

export default DisplayPool;
