import React from 'react';
import { usePage, useForm } from '@inertiajs/react';

const VoteForm: React.FC = () => {
  // Récupère le sondage depuis les props de la page via usePage
  const { vote } = usePage().props;

  // Utilise le hook useForm pour gérer le formulaire
  const { data, setData, post, processing, errors } = useForm({
    answer: '',
    commentary: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // Utilise la variable `vote.id` qui est passée par Inertia dans `vote`
    post(route('poll.vote', { voteId: vote.id }), {
      data: {
        answer: data.answer,
        commentary: data.commentary,
      },
    });
  };

  return (
    <div>
      <h2>{vote.poll_question}</h2>
      <p>Start Date: {vote.start_date}</p>
      <p>End Date: {vote.end_date}</p>

      <form onSubmit={submit}>
        <div>
          <h3>Réponse :</h3>
          <label>
            <input
              type="radio"
              name="answer"
              value="1"
              onChange={() => setData({ ...data, answer: '1' })}
            />
            For
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="2"
              onChange={() => setData({ ...data, answer: '2' })}
            />
            Neutral
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="3"
              onChange={() => setData({ ...data, answer: '3' })}
            />
            Against
          </label>
        </div>

        <div>
          <label htmlFor="commentary">Ajouter un commentaire (facultatif)</label>
          <textarea
            id="commentary"
            value={data.commentary}
            onChange={(e) => setData({ ...data, commentary: e.target.value })}
            placeholder="Votre commentaire"
          />
        </div>

        <button type="submit" disabled={processing}>
          {processing ? 'Enregistrement en cours...' : 'Voter'}
        </button>
      </form>

      {/* Affichage des erreurs */}
      {errors && Object.values(errors).map((error, index) => (
        <div key={index} style={{ color: 'red' }}>
          {error}
        </div>
      ))}
    </div>
  );
};

export default VoteForm;
