import React from 'react'
import classes from './ProductStatistics.module.css'
import Dropdownform from '../DropDown/dropdownform';
import { getPeriod } from '../../Util/Period';


const productstatistics = (props) => {

const dropdownitems = ['One day' , 'Last week' , 'Last Month' , 'Last Year']

const handlechange = (selected) => {
    console.log('productstatistics ' + selected.value)
}
    return (
        <div className = {classes.ProductStatistics}>
            <div className={classes.dropdownform}>
            <Dropdownform items={dropdownitems} changed={handlechange}/>
            </div>
            ProductStatisics Data
        </div>
    )
}

export default productstatistics;