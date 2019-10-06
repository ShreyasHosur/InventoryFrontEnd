import React from 'react'
import classes from './ProfitLoss.module.css'
import Dropdownform from '../DropDown/dropdownform';
import axios from '../../axios-instance'
import { getPeriod } from '../../Util/Period';


const profitloss = (props) => {

const dropdownitems = ['One day' , 'Last week' , 'Last Month' , 'Last Year']

const handlechange = (selected) => {
    console.log(selected.value)
    let body = getPeriod(selected.value);
    axios.post('get-expense-data' , body)
    .then(response => response.data)
}
    return (
        <div className = {classes.ProfitLoss}>
            <div className={classes.dropdownform}>
            <Dropdownform items={dropdownitems} changed={handlechange}/>
            </div>
            ProfitLoss Data
        </div>
    )
}

export default profitloss;