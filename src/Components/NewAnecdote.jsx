import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AnecdoteContext } from '../Context/Anecdote.context';
import Input from './Input';
import useField from '../Hooks/useField';

function NewAnecdote() {
  const history = useHistory();
  const { addAnecdote } = useContext(AnecdoteContext);
  const author = useField('text');
  const anecdote = useField('textarea');

  const handleClick = (e) => {
    e.preventDefault();
    addAnecdote({
      author: author.value,
      anecdote: anecdote.value,
    });
    history.push('/');
  };
  return (
    <form>
      <Input label="Name" data={author} />
      <Input textarea label="Anecdote" data={anecdote} />
      <button className="btn btn-primary " onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}

export default NewAnecdote;
