import React from 'react';
import styles from './DisplayWarning.module.scss';

const DisplayWarning = () => {
  return(
    <div className={styles.wrapper}>
      <p className={styles.info}>Nie znaleziono podanej wartości!</p>
    </div>
  )
}

export default DisplayWarning;