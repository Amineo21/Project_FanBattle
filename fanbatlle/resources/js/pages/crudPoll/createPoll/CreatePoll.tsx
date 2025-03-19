import React, { useState } from 'react';
import axios from 'axios';

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

if (csrfToken) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
}


const CreatePool = () => {
  const [data, setData] = useState({
    start_date: '',
    end_date: '',
    poll_question: '',
  });

  const handleSubmit = async (e) => {


    e.preventDefault();
    try {
      const response = await fetch('/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Ajoutez le token CSRF ici si nécessaire
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert('Sondage créé avec succès : ' + JSON.stringify(result));
    } catch (error) {
      console.error('Erreur lors de la création du sondage:', error);
      alert('Erreur lors de la création du sondage');
    }
  };

  return (
    <div>
      <h2>Créer un sondage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="start_date">Date de début :</label>
          <input
            type="date"
            id="start_date"
            value={data.start_date}
            onChange={(e) =>
              setData({ ...data, start_date: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="end_date">Date de fin :</label>
          <input
            type="date"
            id="end_date"
            value={data.end_date}
            onChange={(e) =>
              setData({ ...data, end_date: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="poll_question">Question du sondage :</label>
          <input
            type="text"
            id="poll_question"
            value={data.poll_question}
            onChange={(e) =>
              setData({ ...data, poll_question: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Créer le sondage</button>
      </form>
    </div>
  );
};

export default CreatePool;
