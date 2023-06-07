import React from 'react';
import styles from './PageTitle.module.scss';

export const PageTitle = ({ children }) => {
  return (
    <div>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};
