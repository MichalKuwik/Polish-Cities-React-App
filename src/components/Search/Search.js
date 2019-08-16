import React from 'react';
import styles from './Search.module.scss';
import Button from '../Button/Button';

const Search = ({filter,value,resetFn}) => {
  return(
    <div className={styles.wrapper}>
      <input 
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

export default Search;