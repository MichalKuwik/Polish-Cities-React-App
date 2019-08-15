import React from 'react';
import styles from './Search.module.scss';
import Button from '../Button/Button';

const Search = ({filter,value,resetFn}) => {
  return(
    <div className={styles.wrapper}>
      <input 
        type="text"
        onChange={filter}
        value={value}
        className={styles.input}
      />
      {value !== '' ? <Button resetFn={resetFn}/> : null}
      
    </div>
  )
}

export default Search;