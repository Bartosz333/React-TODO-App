import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';

export const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.ListForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Description:</span>
      <TextInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};
