import React, { useContext } from 'react';
import { AnecdoteContext } from '../Context/Anecdote.context';

function Home() {
  const { anecdotes, removeAnecdote } = useContext(AnecdoteContext);

  const handleClick = (e, id) => {
    e.preventDefault();
    removeAnecdote(id);
  };
  return (
    <div>
      <h3>Anecdotes</h3>
      {anecdotes.length === 0 && <em>No anecdotes</em>}
      <ul className="list-group">
        {anecdotes.map((anecdote) => (
          <li className="list-group-item">
            {anecdote.anecdote}
            <br />
            <em>{anecdote.author}</em>
            <div>
              <a href="/" onClick={(e) => handleClick(e, anecdote.id)}>
                delete
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
