import React, {Component} from 'react'
import classes from './Sidebar.module.css';
import Hamburger from '../Topbar/Hamburger/Hamburger';
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/actions/actionCreators';
import { Link } from 'react-router-dom'

class Sidebar extends Component {

    render = () => {
        let sidebar =  this.props.sidebarshow ?  
        <div className = {classes.Sidebar}>
        <div className={classes.hamburger}  >
            <Hamburger clicked={this.props.ToggleSideBar} />
        </div>
          <ul className ={classes.listitems}>
              <li>
                <Link to="/store" className = {classes.Link} >Store</Link>
              </li>
              <li>Invoice</li>
              <li>Expense</li>
              <li>Reports</li>
          </ul>
         </div> : null 
        return (
            sidebar
        )
    }

}

const mapStatetoProps = state => {
    return {
        sidebarshow : state.sidebarshow
    };
}

const mapDispatchtoProps = dispatch => {
    return {
    ToggleSideBar : () => dispatch(actionCreators.SidebarToggle())

    }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(Sidebar);