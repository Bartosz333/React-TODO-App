import { PageTitle } from '../PageTitle/PageTitle';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};
