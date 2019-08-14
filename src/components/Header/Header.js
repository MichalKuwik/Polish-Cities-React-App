import React from 'react';
import styles from './Header.module.scss';
import cityImg from '../../assets/img/cities.png';



export const Header = () => {
  return(
    <header className={styles.header}>
      <img className={styles.img} src={cityImg} alt='' />
      <h1 className={styles.header}>Największe Polskie miasta</h1>
      
    </header>
  )
}

