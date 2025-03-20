import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

type Vote = {
  id: number;
  start_date: string;
  end_date: string;
  poll_question: string;
};

type PageProps = {
  vote: Vote;
};

export default function UpdatePool() {
  const { vote } = usePage<PageProps>().props;

  const { data, setData, put, processing, errors } = useForm({
    start_date: vote.start_date,
    end_date: vote.end_date,
    poll_question: vote.poll_question,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/polls/${vote.id}`, {
      onSuccess: () => {
        // Optionnel : afficher un message ou rediriger
      },
    });
  };

  return (
    <div>
      <Head title="Modifier le sondage" />
      <h2>Modifier le sondage</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="start_date">Date de début :</label>
          <input
            type="date"
            id="start_date"
            value={data.start_date}
            onChange={(e) => setData('start_date', e.target.value)}
            required
          />
          {errors.start_date && <div>{errors.start_date}</div>}
        </div>
        <div>
          <label htmlFor="end_date">Date de fin :</label>
          <input
            type="date"
            id="end_date"
            value={data.end_date}
            onChange={(e) => setData('end_date', e.target.value)}
            required
          />
          {errors.end_date && <div>{errors.end_date}</div>}
        </div>
        <div>
          <label htmlFor="poll_question">Question du sondage :</label>
          <input
            type="text"
            id="poll_question"
            value={data.poll_question}
            onChange={(e) => setData('poll_question', e.target.value)}
            required
          />
          {errors.poll_question && <div>{errors.poll_question}</div>}
        </div>
        <button type="submit" disabled={processing}>
          Mettre à jour
        </button>
      </form>
      <Link href="/polls">
        <button>Retour à la liste</button>
      </Link>
    </div>
  );
}
