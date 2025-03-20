import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

type Vote = {
  id: number;
  start_date: string;
  end_date: string;
  poll_question: string;
};

type PageProps = {
  votes: Vote[];
};

export default function DisplayPoll() {
  const { votes } = usePage<PageProps>().props;

  const handleDelete = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce sondage ?")) {
      Inertia.delete(`/polls/${id}`);
    }
  };

  return (
    <div>
      <Head title="Liste des sondages" />
      <h2>Liste des sondages</h2>
      {votes.length === 0 ? (
        <p>Aucun sondage trouvé.</p>
      ) : (
        <ul>
          {votes.map((vote) => (
            <li key={vote.id}>
              <strong>ID :</strong> {vote.id} - <strong>Question :</strong> {vote.poll_question}{' '}
              <Link href={`/polls/${vote.id}`}>Voir les détails</Link>{' '}
              <Link href={`/polls/${vote.id}/edit`}>
                <button>Modifier</button>
              </Link>{' '}
              <button onClick={() => handleDelete(vote.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
