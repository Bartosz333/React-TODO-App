import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getSearchString } from '../../redux/store';

export const SearchForm = () => {
  const updateSearchString = useSelector(getSearchString);
  const [string, setString] = useState(updateSearchString);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchString(string));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};
