import React from 'react';
import styles from './Search.module.scss';

const Search = ({filter,value}) => {
  return(
    <div className={styles.wrapper}>
      <input 
        type="text"
        onChange={filter}
        value={value}
        className={styles.input}
      />
    </div>
  )
}

export default Search;