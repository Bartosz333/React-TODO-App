import { PageTitle } from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';

export const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards.length)
    return <div className={styles.no_favorite_cards}>No cards…!</div>;
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
};
