import React from 'react';
import styles from './Search.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Search = ({filter,value,resetFn}) => {
  return(
    <div className={styles.wrapper}>
      <input
        autoComplete="off" 
        type="text"
        id="name"
        onChange={filter}
        value={value}
        className={styles.input}
        placeholder=" "
      />
      <label className={styles.label} htmlFor="name">
          Wpisz nazwę miasta
      </label>
      <div className={styles.formItemBar} />
      {value !== '' ? <Button resetFn={resetFn}/> : null}
    </div>
  )
}

Search.propTypes = {
  filter:PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
  resetFn:PropTypes.func.isRequired
}

export default Search;