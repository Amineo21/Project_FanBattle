import React, { useState } from 'react';

const DeletePool = () => {
  const [deleteId, setDeleteId] = useState('');

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/votes/${deleteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Ajoutez le token CSRF ici si nécessaire
        },
      });
      const result = await response.json();
      alert('Sondage supprimé : ' + JSON.stringify(result));
    } catch (error) {
      console.error('Erreur lors de la suppression du sondage:', error);
      alert('Erreur lors de la suppression du sondage');
    }
  };

  return (
    <div>
      <h2>Supprimer un sondage</h2>
      <form onSubmit={handleDeleteSubmit}>
        <div>
          <label htmlFor="delete_id">ID du sondage :</label>
          <input
            type="number"
            id="delete_id"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Supprimer</button>
      </form>
    </div>
  );
};

export default DeletePool;
