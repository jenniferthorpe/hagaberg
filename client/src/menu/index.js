import React from 'react';
import {
  Link
} from "react-router-dom";

import styles from './styles.module.css'
import Logo from '../logo';

const Menu = () => {

  return (
    <Link to='/'>
      <div className={styles.background}>
        <Logo />
      </div>
    </Link>
  )
}

export default Menu;
