import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';

const Card = ({ title, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const clickHandler = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(id, isFavorite));
  };
  return (
    <li className={styles.card}>
      {title}
      <button className={styles.btn} onClick={clickHandler}>
        <i
          className={clsx(
            'fa fa-solid fa-star-o',
            isFavorite && styles.isFavorite
          )}
        ></i>
      </button>
    </li>
  );
};
export default Card;
