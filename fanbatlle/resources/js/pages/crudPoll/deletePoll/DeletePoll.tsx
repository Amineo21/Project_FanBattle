import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function DeletePoll() {
  const [deleteId, setDeleteId] = useState('');

  const handleDeleteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!confirm('Voulez-vous vraiment supprimer ce sondage ?')) {
      return;
    }

    // Utilisez Inertia.delete pour appeler l'endpoint DELETE correspondant
    Inertia.delete(`/polls/${deleteId}`);
  };

  return (
    <div>
      <Head title="Supprimer un sondage" />
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
      <Link href="/polls">
        <button>Retour à la liste</button>
      </Link>
    </div>
  );
}
