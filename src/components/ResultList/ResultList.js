import React from 'react';
import styles from './ResultList.module.scss';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

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

ResultList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default ResultList;