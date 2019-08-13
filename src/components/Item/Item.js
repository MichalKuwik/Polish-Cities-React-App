import React from 'react';
import styles from './Item.module.scss';

function Item({city}){
  return(
    <div className={styles.item}>
      <p>{city.name}</p>
      <p>{city.population}</p>
      <p>{city.voivodeship}</p>
      <p>{city.surface}</p>
      <img 
        src={city.img} 
        alt="image"
        className={styles.img} />
    </div>
  )
}

export default Item;