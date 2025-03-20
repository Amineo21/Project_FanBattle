import React from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';

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
  // On utilise useForm même sans données pour bénéficier de la méthode delete et d'une éventuelle gestion de l'état
  const { delete: destroy } = useForm();

  const handleDelete = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce sondage ?")) {
      // Utilisation de la fonction route() pour générer l'URL (en supposant que la route s'appelle 'polls.destroy')
      destroy(route('polls.destroy', id));
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
              <Link href={route('polls.show', vote.id)}>Voir les détails</Link>{' '}
              <Link href={route('polls.edit', vote.id)}>
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
