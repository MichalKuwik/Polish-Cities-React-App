import React from 'react';
import styles from './Item.module.scss';

function Item({city}){
  return(
    <div className={styles.item}>
      <p className={styles.header}>{city.name}</p>
      <p className={styles.info}>Wojewódźtwo: {city.voivodeship}</p>
      <p className={styles.info}>Populacja: {city.population} mieszkańców</p>
      <p className={styles.info}>Obszar: {city.surface} km²</p>
      <img 
        src={city.img} 
        alt="image"
        className={styles.img} />
    </div>
  )
}

export default Item;