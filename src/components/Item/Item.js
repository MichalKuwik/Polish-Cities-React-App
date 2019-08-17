import React from 'react';
import styles from './Item.module.scss';
import PropTypes from 'prop-types';

function Item({city}){
  return(
    <div className={styles.item}>
      <p className={styles.header}>{city.name}</p>
      <p className={styles.info}>Wojewódźtwo: {city.voivodeship}</p>
      <p className={styles.info}>Populacja: {city.population} mieszkańców</p>
      <p className={styles.info}>Obszar: {city.surface} km²</p>
      <img 
        src={city.img} 
        alt="img"
        className={styles.img} />
    </div>
  )
}

Item.propTypes = {
  city: PropTypes.object.isRequired,
}

export default Item;