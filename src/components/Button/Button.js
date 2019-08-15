import React from 'react';
import styles from './Button.module.scss';

const Button = ({resetFn}) => (
  <button 
    className={styles.btn}
    onClick={resetFn}
    >reset</button>
);

export default Button;