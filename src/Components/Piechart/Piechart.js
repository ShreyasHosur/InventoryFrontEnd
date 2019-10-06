import React from 'react'
import classes from './Piechart.module.css'
import Dropdownform from '../DropDown/dropdownform';
import axios from '../../axios-instance'
import { getPeriod } from '../../Util/Period';


const piechart = (props) => {

const dropdownitems = ['One day' , 'Last week' , 'Last Month' , 'Last Year']



const handlechange = (selected) => {
    console.log(selected.value)
    let body = getPeriod(selected.value)
    axios.post('get-pie-chart-data',body)
    .then(response => console.log(response.data));
}
    return (
        <div className = {classes.piechart}>
            <div className={classes.dropdownform}>
            <Dropdownform items={dropdownitems} changed={handlechange}/>
            </div>
            Piechart Data
        </div>
    )
}

export default piechart;