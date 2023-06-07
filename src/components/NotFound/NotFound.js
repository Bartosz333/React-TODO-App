import { PageTitle } from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <PageTitle>404 NOT FOUND</PageTitle>
    </div>
  );
};
