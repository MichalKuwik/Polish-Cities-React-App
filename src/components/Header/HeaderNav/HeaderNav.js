import React from 'react';
import styles from './HeaderNav.module.scss';
import {NavLink} from 'react-router-dom';

const HeaderNav = () => (
  <nav>
    <NavLink
      to="/"
      exact
      activeClassName={styles.activeNavItem}
      className={styles.navItem}
      >Applikacja
    </NavLink>
    <NavLink
      to="/about"
      activeClassName={styles.activeNavItem}
      className={styles.navItem}
      >Opis
    </NavLink>
  </nav>
)

export default HeaderNav;