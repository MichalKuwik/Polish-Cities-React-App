import React from 'react';
import styles from './Item.module.scss';
import PropTypes from 'prop-types';
import surfaceImg from '../../assets/img/soil.png';
import populImg from '../../assets/img/family.png';
import voivodeshipImg from '../../assets/img/map.png';

function Item({city}){
  return(
    <div className={styles.item}>
      <p className={styles.header}>{city.name}</p>
      <p className={styles.info}><img 
          className={styles.imgIcon} 
          src={voivodeshipImg} 
          alt=''
          />Wojewódźtwo: {city.voivodeship}</p>
      <p className={styles.info}>
        <img 
          className={styles.imgIcon} 
          src={populImg} 
          alt=''
          />Populacja: {city.population} mieszkańców
      </p>
      <p className={styles.info}>
        <img 
          className={styles.imgIcon} 
          src={surfaceImg} 
          alt=''
          />Obszar: {city.surface} km²
      </p>
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