import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function DeletePoll() {
  const [deleteId, setDeleteId] = useState('');
  const { delete: destroy } = useForm();

  const handleDeleteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!confirm('Voulez-vous vraiment supprimer ce sondage ?')) {
      return;
    }

    destroy(route('polls.destroy', deleteId));
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
      <Link href={route('polls.index')}>
        <button>Retour à la liste</button>
      </Link>
    </div>
  );
}
