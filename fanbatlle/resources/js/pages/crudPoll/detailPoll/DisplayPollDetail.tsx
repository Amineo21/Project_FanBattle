import React from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';

type Vote = {
  id: number;
  start_date: string;
  end_date: string;
  poll_question: string;
};

type PageProps = {
  vote: Vote;
};

export default function DisplayPollDetail() {
  const { vote } = usePage<PageProps>().props;
  const { delete: destroy } = useForm();

  const handleDelete = () => {
    if (confirm("Voulez-vous vraiment supprimer ce sondage ?")) {
      destroy(route('polls.destroy', vote.id));
    }
  };

  return (
    <div>
      <Head title="Détails du sondage" />
      <h2>Détails du sondage</h2>
      <p>
        <strong>ID :</strong> {vote.id}
      </p>
      <p>
        <strong>Date de début :</strong> {vote.start_date}
      </p>
      <p>
        <strong>Date de fin :</strong> {vote.end_date}
      </p>
      <p>
        <strong>Question :</strong> {vote.poll_question}
      </p>
      <Link href={route('polls.edit', vote.id)}>
        <button>Modifier</button>
      </Link>{' '}
      <button onClick={handleDelete}>Supprimer</button>{' '}
      <Link href={route('polls.index')}>
        <button>Retour à la liste</button>
      </Link>
    </div>
  );
}
