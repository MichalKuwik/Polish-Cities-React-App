import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import {ResultWrapper} from './ResultStyled';

function ResultList({cities}){

  const citiesResult = cities.map(city => (
    <Item 
      key={city.name}
      city={city}/>
  ))

  return(
    <ResultWrapper>
      {citiesResult}
    </ResultWrapper>
  )
}

ResultList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default ResultList;