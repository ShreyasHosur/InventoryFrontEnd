import React from 'react';
import classes from './Hamburger.module.css';

const hamburger = (props) => {
   return( <div className={classes.hamburger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
   )
   };

export default hamburger;