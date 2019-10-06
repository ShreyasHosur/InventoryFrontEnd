import React from 'react'
import classes from './Salesgraph.module.css'
import { getPeriod } from '../../Util/Period';
import Dropdownform from '../DropDown/dropdownform';


const salesgraph = (props) => {

const dropdownitems = ['One day' , 'Last week' , 'Last Month' , 'Last Year']

const handlechange = (selected) => {
    console.log('salesgraph ' + selected.value)
}
    return (
        <div className = {classes.Salesgraph}>
            <div className={classes.dropdownform}>
            <Dropdownform items={dropdownitems} changed={handlechange}/>
            </div>
            Salesgraph Data
        </div>
    )
}

export default salesgraph;