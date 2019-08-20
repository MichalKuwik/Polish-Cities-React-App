import React from 'react';
import styles from './HeaderNav.module.scss';
import {NavLink} from 'react-router-dom';
import appImg from '../../../assets/img/data.png'
import descrImg from '../../../assets/img/light.png';

const HeaderNav = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      exact
      activeClassName={styles.activeNavItem}
      className={styles.navItem}
      >
        <img 
          src={appImg} 
          alt=''
          className={styles.img}
          />
       
    </NavLink>
  
    <NavLink
      to="/about"
      activeClassName={styles.activeNavItem}
      className={styles.navItem}
      >
      <img 
          src={descrImg} 
          alt=''
          className={styles.img}
          />
    </NavLink>
  </nav>
)

export default HeaderNav;