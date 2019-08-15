import React from 'react';
import styles from './Header.module.scss';
import cityImg from '../../assets/img/cities.png';



export const Header = () => {
  return(
    <header className={styles.header}>
      <img className={styles.img} src={cityImg} alt='' />
      <h1 className={styles.title}>Największe <span className={styles.spanEl}>Polskie</span> miasta</h1>
      
    </header>
  )
}

