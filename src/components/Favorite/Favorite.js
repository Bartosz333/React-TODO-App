import { PageTitle } from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

export const Favorite = () => {
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};
