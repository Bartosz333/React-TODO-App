import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';

const Card = ({ title, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(id, isFavorite));
  };

  const removeHandler = () => {
    dispatch(removeCard(id));
  };
  return (
    <li className={styles.card}>
      {title}
      <span>
        <button className={styles.btn} onClick={toggleHandler}>
          <i
            className={clsx(
              'fa fa-solid fa-star-o',
              isFavorite && styles.isFavorite
            )}
          ></i>
        </button>
        <button className={styles.btn} onClick={removeHandler}>
          <i className='fa fa-solid fa-trash'></i>
        </button>
      </span>
    </li>
  );
};
export default Card;
