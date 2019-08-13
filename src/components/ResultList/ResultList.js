import React from 'react';
import styles from './ResultList.module.scss';
import Item from '../Item/Item';

function ResultList({cities}){

  const citiesResult = cities.map(city => (
    <Item 
      key={city.name}
      city={city}/>
  ))

  return(
    <div className={styles.resultWrapper}>
      {citiesResult}
    </div>
  )
}

export default ResultList;