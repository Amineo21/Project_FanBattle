import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import "../../../../css/create.css"
// import axios from 'axios';

// const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

// if (csrfToken) {
//   axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
// }

type CreatePollForm = {
  start_date: string;
  end_date: string;
  poll_question: string;
}

export default function CreatePoll() {
  const {data, setData, post, processing, errors, reset } = useForm<Required<CreatePollForm>> ({
      start_date: '',
      end_date: '',
      poll_question: '',
    });
  
    const submit: FormEventHandler = (e) => {
      e.preventDefault();

      post(route('create'))
    }
  
    return (
    
      
      <div className='container'>
        <h2>Créer un sondage</h2>
        <form onSubmit={submit} >
          <div className='form-group'>
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
          <div className='form-group'>
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
          <div className='form-group'>
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
          <button type="submit" className='btn'>Créer le sondage</button>
        </form>
      </div>
        
    );
  }


