import React from 'react';
import classes from './Pagination.module.css';

const pagination = (props) => {


    return (
        <div className = {classes.pagination}>
            <ul >
                { props.prevButton() ? <li onClick={props.prevClick}>Prev</li> : null}
                {props.doublePrevbutton() ? <li onClick={props.doublePrevClick}>...</li> : null}
                <li>{props.currentpageNumber}</li>
                { props.doublenextButton() ? <li onClick={props.doubleNextClick}>...</li> : null}
                { props.nextButton() ? <li onClick={props.nextClick}>Next</li> : null}
            </ul>
        </div>
    )
}


export default pagination;