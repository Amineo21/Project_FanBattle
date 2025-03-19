import React, { useState } from 'react';

const UpdatePool = () => {
  const [updateData, setUpdateData] = useState({
    update_id: '',
    start_date: '',
    end_date: '',
    poll_question: '',
  });

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const voteId = updateData.update_id;
    try {
      const response = await fetch(`/votes/${voteId}`, {
        method: 'PUT', // ou 'PATCH'
        headers: {
          'Content-Type': 'application/json',
          // Ajoutez le token CSRF ici si nécessaire
        },
        body: JSON.stringify({
          start_date: updateData.start_date,
          end_date: updateData.end_date,
          poll_question: updateData.poll_question,
        }),
      });
      const result = await response.json();
      alert('Sondage mis à jour : ' + JSON.stringify(result));
    } catch (error) {
      console.error('Erreur lors de la mise à jour du sondage:', error);
      alert('Erreur lors de la mise à jour du sondage');
    }
  };

  return (
    <div>
      <h2>Mettre à jour un sondage</h2>
      <form onSubmit={handleUpdateSubmit}>
        <div>
          <label htmlFor="update_id">ID du sondage :</label>
          <input
            type="number"
            id="update_id"
            value={updateData.update_id}
            onChange={(e) =>
              setUpdateData({ ...updateData, update_id: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="update_start_date">Date de début :</label>
          <input
            type="date"
            id="update_start_date"
            value={updateData.start_date}
            onChange={(e) =>
              setUpdateData({ ...updateData, start_date: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="update_end_date">Date de fin :</label>
          <input
            type="date"
            id="update_end_date"
            value={updateData.end_date}
            onChange={(e) =>
              setUpdateData({ ...updateData, end_date: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="update_poll_question">Question du sondage :</label>
          <input
            type="text"
            id="update_poll_question"
            value={updateData.poll_question}
            onChange={(e) =>
              setUpdateData({ ...updateData, poll_question: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UpdatePool;
