import React, { createContext, useState } from 'react';
import data from '../data';

export const AnecdoteContext = createContext();

// eslint-disable-next-line react/prop-types
export const AnecdoteProvider = ({ children }) => {
  const [anecdotes, setAnecdotes] = useState(data);
  console.log('~ anecdotes', anecdotes);
  const addAnecdote = (newAnecdote) => {
    setAnecdotes((prevAnecdotes) => [
      ...prevAnecdotes,
      {
        ...newAnecdote,
        id: anecdotes.length + 1,
      },
    ]);
  };

  const removeAnecdote = (id) => {
    setAnecdotes((prevAnecdotes) =>
      prevAnecdotes.filter((anecdote) => anecdote.id !== id)
    );
  };

  return (
    <AnecdoteContext.Provider
      value={{ anecdotes, addAnecdote, removeAnecdote }}
    >
      {children}
    </AnecdoteContext.Provider>
  );
};
